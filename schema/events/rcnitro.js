import mongoose from "mongoose";


const schema = new mongoose.Schema({
    teamName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    teamLeaderName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    teamLeaderPhone:{
        type:String,
        required:true,
        minLength:10,
        maxLength:13
    },
    teamLeaderEmail:{
        type:String,
        required:true,
        minLength: 6,
        maxLength: 50,
    },
    address:{
        type:String,
        required:true,
        minLength:3,
        maxLength:100
    },
    college:{
        type:String,
        maxLength:100
    },
    additionalMembers:[
        {
                 name:{
                     type:String,
                     minLength:3,
                     maxLength:30
                 },
                 phoneNo:{
                     type:String,
                     minLength:10,
                     maxLength:13
                 },
                 email:{
                     type:String,
                     minLength: 6,
                     maxLength: 50,
                 }
        }
     ],
     payment:{
        status:{
            type:String,
            default:"NOTVERIFIED"
        },
        txnId:{
            type:String,
            required:true
        },
        amount:{
            type:String,
            default: ""
        }
    }
},
{
    timestamps: true,
})

const rcnitro = mongoose.models.rcnitro || mongoose.model("rcnitro", schema);
export default rcnitro;