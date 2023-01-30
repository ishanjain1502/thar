// user dashboard api
import connectDB from "../../../../lib/mongodb";
import { handleError } from "../../../../utility/handleError";
import tharUser from "../../../../schema/tharUser/tharUsers";
import withValidation from "../../../../middleware/withValidation";


connectDB();

const handler = async (req, res) => {
  try {
      const data = await tharUser
          .findOne({ email: req.session.user.email })
          .select(
            "name email phone college userTharID paymentStatus credits events referredBy"
          )
          .lean();
      return res.status(200).json({ error: false, message: "success", data });
  } catch (error) {
    handleError(res, "error occurred try again!");
  }
};

export default withValidation(handler, null, "GET")
