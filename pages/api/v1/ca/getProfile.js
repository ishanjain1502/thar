import connectDB from "../../../../lib/mongodb";
import { handleError } from "../../../../utility/handleError";
import user from "../../../../schema/ca/users";
import withValidation from "../../../../middleware/withValidation";

connectDB(); // connect to db

const handler = async (req, res) => {
  try {
      const data = await user
          .findOne({ email: req.session.user.email })
          .select(
            "name email phone college degree year address referralCode referralCount"
          )
          .lean();
      return res.status(200).json({ error: false, message: "success", data });
  } catch (error) {
    handleError(res, "error occurred try again!");
  }
};

export default withValidation(handler, null, "GET")
