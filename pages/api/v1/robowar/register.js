import connectDB from "../../../../lib/mongodb";
import withValidation from "../../../../middleware/withValidation";
import validationSchema from "../../../../validators/v1/events/robowar";
import roboWar from "../../../../schema/events/robowar";
import { handleError } from "../../../../utility/handleError";



connectDB();  // connect to db

const handler = async (req, res) => {

   try {
          await roboWar.create({captainEmail:req.session.user.email, ...req.body });
          return res.status(200).json({ error: false, message: "success" });
   } catch (error) {
        console.log(error);
        handleError(res, "error occurred try again!");
   }
}

export default withValidation(handler, validationSchema,'POST')