import mongoose from "mongoose";


const schema = new mongoose.Schema({
    teamName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:20
    },
    captainName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    captainPhoneNo:{
        type:String,
        required:true,
        minLength:10,
        maxLength:13
    },
    captainEmail:{
        type:String,
        required:true,
        minLength: 16,
        maxLength: 50,
    },
    botName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    category:{
        type:String,
        required:true,
        enum:['15KG','30KG']
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
                     minLength: 3,
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
            minLength:3,
            maxLength:50,
            required:true
        },
        amount:{
            type:String,
            default:''
        }
    }
},
{
    timestamps: true,
})

const roboWar = mongoose.models.robowar || mongoose.model("robowar", schema);
export default roboWar;