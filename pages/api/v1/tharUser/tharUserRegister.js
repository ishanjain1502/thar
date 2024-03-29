import connectDB from "../../../../lib/mongodb";
import withValidation from "../../../../middleware/withValidation";
import validationSchema from "../../../../validators/v1/user/tharUser";
import tharUser from "../../../../schema/tharUser/tharUsers";
import user from "../../../../schema/ca/users";
import withoutSpaces from "../../../../middleware/withoutSpaces";

connectDB(); // connect to db

function generateString(length) {
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz";

  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const handler = async (req, res) => {
  try {
    let tharID = "THAR23-";
    const random = generateString(6);
    tharID = tharID + random;
    req.body.referralCode = withoutSpaces(req.body.referralCode);

    const ca = await user.find({ referralCode: req.body.referralCode });
    // console.log(ca);
    if (ca.length != 0) {
      let referredBy = ca[0]._id;
      const data = await tharUser.create({
        email:req.session.user.email,
        ...req.body,
        userTharID: tharID,
        referredBy: referredBy,
      });

      const doc = await user.updateOne(
        { _id: ca[0]._id },
        {
          referredTharUser: [...ca[0].referredTharUser, data._id],
          $inc: {
            referralCount: 1,
          },
        }
      );
      res
        .status(200)
        .json({ error: false, message: "success", data: data.userTharID });
    } else {
      delete req.body.referralCode;

      const data = await tharUser.create({
        email:req.session.user.email,
        ...req.body,
        userTharID: tharID,
      });
      res
        .status(200)
        .json({ error: false, message: "success", data: data.userTharID });
    }
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(403)
        .json({ error: true, message: "Email already exists" });
    }
    console.log("errrrrr------", error);
    res.status(500).json({ error: true, message: "error occurred try again!" });
  }
};

export default withValidation(handler, validationSchema,'POST');
