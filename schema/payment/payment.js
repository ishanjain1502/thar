import mongoose from "mongoose";
// thar id, status-> enum, verification -> enum , amount , transaction id
const paymentSchema = new mongoose.Schema({
    tharUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tharUser",
        required: true
    }
    ,
    tharId : {
        type: String,
        required:true,
        unique: true
    },
    amount: {
        type: String,
        required:true,
    },
    transactionId: {
        type: String,
        // required:true
    },
    status: {
        type: String,
        enum: ["success" , "failed"],
        default: "success",
    },
    verification: {
        type: String,
        enum: ["non-verified", "pending" , "verified", "failed"],
        default: "pending",
    }
},
{
    timestamps: true,
});

const payment = mongoose.models.payment || mongoose.model('payment' , paymentSchema);
export default payment;