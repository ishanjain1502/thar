import connectDB from "../../../../lib/mongodb";
import tharUser from "../../../../schema/tharUser/tharUsers";
import withoutSpaces from "../../../../middleware/withoutSpaces";
import payment from "../../../../schema/payment/payment";
import validationSchema from "../../../../validators/v1/payment/payment";
import withValidation from "../../../../middleware/withValidation";

connectDB(); // connecting to db

const handler = async(req,res) => {
    try{

        let {tharId, amount, transactionId} = req.body;

        transactionId = withoutSpaces(transactionId);

        const user = await tharUser.findOne({
            userTharID: tharId
        })
        
        if(!user){
            return res.status(402).json({
                code : 402,
                error : true,
                message : "Thar ID does not exists, re enter your thar id with same transaction id "
            })
        }else{
            
            const ifUser = await payment.findOne({
                tharId: tharId
            })
            console.log(ifUser);
            
            if(!ifUser){
                console.log('new user');
                const newPayment = await payment.create({
                    tharUserId: user._id,
                    tharId: tharId,
                    amount: amount,
                    transactionId : transactionId,
                    status : "success",
                    verification: "pending"
                })

                let updatedUser = await tharUser.findByIdAndUpdate(
                    user._id,
                    {
                        credits : 3
                    },{new:true}
                )
                console.log(updatedUser);
                return res.status(200).json({
                    code : 200,
                    error : false,
                    message : newPayment
                })
            }else{
                return res.status(403).json({
                    code : 403,
                    error : true,
                    message : "User already did payment"
                })
            }            


        }


    }catch(err){
        console.log(err);
        return res.status(401).json({
            code : 401,
            error : true,
            message : err
        })
    }
}

export default withValidation(handler, validationSchema, 'POST');