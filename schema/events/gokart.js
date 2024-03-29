import mongoose from "mongoose";

// Captain email is primary key

export const schema = new mongoose.Schema({
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
        unique: true,
    },
    driverName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    driverPhoneNo:{
        type:String,
        required: true,
        minLength:10,
        maxLength:13
    },
    driverEmail:{
        type:String,
        required: true,
        minLength: 16,
        maxLength: 50
    },
    coDriverName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    coDriverPhoneNo:{
        type:String,
        required:true,
        minLength:10,
        maxLength:13
    },
    coDriverEmail:{
        type:String,
        required:true,
        minLength: 16,
        maxLength: 50,
    },
    coCaptainName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    coCaptainPhoneNo:{
        type:String,
        required:true,
        minLength:10,
        maxLength:13
    },
    coCaptainEmail:{
        type:String,
        required:true,
        minLength: 16,
        maxLength: 50,
    },
    mentorName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    mentorPhoneNo:{
        type:String,
        required:true,
        minLength:10,
        maxLength:13
    },
    mentorEmail:{
        type:String,
        minLength: 16,
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
        minLength:3,
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
                minLength: 16,
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

const goKart =  mongoose.models.gokart ||  mongoose.model("gokart", schema) ;
export default goKart;