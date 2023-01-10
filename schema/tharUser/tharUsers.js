// name, email, phone, college, rollNo, degree, address, pincode, refferedBy(CA-ID),Events(all registered), team-mates name(optional)
import mongoose from "mongoose";



const tharUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 3,
    },
    // TODO: change min value of mail to 13
    email: {
        type: String,
        required: true,
        minLength: 16,
        maxLength: 50,
        unique: true,
    },
    phone: {
        type: String,
        minLength: 10,
        maxLength: 13,
        required: true,
    },
    college: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
    },
    rollNo: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    degree: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
    },
    year: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 20
    },
    address: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 200,
    },
    pincode: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 6,
    },
    userTharID: {
        type: String,
        required: true,
        minLength: 9,
        maxLength: 20,
        unique: true
    },
    paymentStatus: {
        type: Boolean,
        required: true,
        default: false,
    },
    credits: {
        type: Number,
        required: true,
        default: 0
    },
    events: {
        type: [String],
        required: true,
        default : []
    },
    referredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user" ,      
    },
    referredCode: {
        type: String,
        minLength: 9,
        maxLength: 9,     
    }
}, {
    timestamps: true,
})

const tharUser = mongoose.models.tharUser || mongoose.model('tharUser', tharUserSchema);
export default tharUser;