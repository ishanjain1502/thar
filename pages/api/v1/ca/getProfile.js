import connectDB from "../../../../lib/mongodb";
import withMethod from "../../../../middleware/withMethod";
import { authOptions } from "../../auth/[...nextauth]";
import { handleError } from "../../../../utility/handleError";
import user from "../../../../schema/ca/users";
import { unstable_getServerSession } from "next-auth/next";

connectDB(); // connect to db

const handler = async (req, res) => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (session) {
      const data = await user
        .findOne({ email: session.user.email })
        .select(
          "name email phone college degree year address referralCode referralCount"
        )
        .lean();
      return res.status(200).json({ error: false, message: "success", data });
    }
    handleError(res, "unauthroized");
  } catch (error) {
    handleError(res, "error occurred try again!");
  }
};

export default withMethod(handler, ["GET"]);
