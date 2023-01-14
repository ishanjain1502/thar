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
        maxLength:10
    },
    captainEmail:{
        type:String,
        required:true,
        minLength: 16,
        maxLength: 50,
        unique: true,
    },
    boatName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:30
    },
    category:{
        KG15:{
            type:Boolean,
        },
        KG30:{
            type:Boolean,
        }
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