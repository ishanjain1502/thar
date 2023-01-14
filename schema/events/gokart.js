import mongoose from "mongoose";



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
        maxLength:10
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
        minLength:10,
        maxLength:10
    },
    driverEmail:{
        type:String,
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
        minLength:10,
        maxLength:10
    },
    coDriverEmail:{
        type:String,
        minLength: 16,
        maxLength: 50,
    },
    coCaptainName:{
        type:String,
        minLength:3,
        maxLength:30
    },
    coCaptainPhoneNo:{
        type:String,
        minLength:10,
        maxLength:10
    },
    coCaptainEmail:{
        type:String,
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
        maxLength:10
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
                    maxLength:10
                },
                email:{
                    type:String,
                    minLength: 16,
                    maxLength: 50,
                }
       }
    ]
    

})

const Gokart = mongoose.model("Gokart", schema);
export default Gokart;