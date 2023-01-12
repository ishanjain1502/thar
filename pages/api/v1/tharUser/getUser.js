// user dashboard api
import connectDB from "../../../../lib/mongodb";
import withMethod from "../../../../middleware/withMethod";
import { authOptions } from "../../auth/[...nextauth]";
import { handleError } from "../../../../utility/handleError";
import tharUser from "../../../../schema/tharUser/tharUsers";
import { unstable_getServerSession } from "next-auth/next"

connectDB();

const handler = async (req, res) => {

    try {
      const session = await unstable_getServerSession(req, res, authOptions);
      if (session) {
        const data = await tharUser
          .findOne({ email: 'naruto@gmail.com' })
          .select(
            "name email phone college userTharID paymentStatus credits events referredBy"
          )
          .lean();
        return res.status(200).json({ error: false, message: "success", data });
      }
      handleError(res,"unauthroized");
    } catch (error) {
      handleError(res,"error occurred try again!");
    }
  };
  
  export default withMethod(handler, ["GET"]);