import connectDB from "../../../../lib/mongodb";
import tharUser from "../../../../schema/tharUser/tharUsers";
import payment from "../../../../schema/payment/payment";
import withValidation from "../../../../middleware/withValidation";

connectDB(); // connecting to db

const handler = async(req,res) => {
    
}

export default withValidation(handler , null , "PUT");