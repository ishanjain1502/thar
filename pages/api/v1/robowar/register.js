import connectDB from "../../../../lib/mongodb";
import withValidation from "../../../../middleware/withValidation";
import validationSchema from "../../../../validators/v1/events/robowar";
import roboWar from "../../../../schema/events/robowar";
import { handleError } from "../../../../utility/handleError";
import { authOptions } from "../../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next"


connectDB();  // connect to db

const handler = async (req, res) => {

   try {
          const session = await unstable_getServerSession(req, res, authOptions);
          if(session){
            await roboWar.create({ ...req.body });
            return res.status(200).json({ error: false, message: "success" });
          }
          handleError(res,"unauthroized");
   } catch (error) {
        console.log(error);
        handleError(res, "error occurred try again!");
   }
}

export default withValidation(handler, validationSchema,'POST');