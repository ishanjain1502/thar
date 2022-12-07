// name, email, phone, college, rollNo, degree, address, pincode
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
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
        min: 16,
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
    referralCode: {
        type: String,
        required: true,
        minLength: 9,
        maxLength: 9
    },
    referralCount: {
        type: Number,
        default: 0,
        min: 0,
        max: 1000
    }
}, {
    timestamps: true,
})

const user = mongoose.models.User || mongoose.model('User', userSchema);
export default user;