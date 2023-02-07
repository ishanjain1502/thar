import mongoose, { Mongoose } from "mongoose";

// captain -thar id , event-name , additional Members

const schema = new mongoose.Schema({
    captainTharId: {
        type: String,
        required: true,
        minLength: 9,
        maxLength: 20,
    },
    eventName: {
        type: String,
        required: true,
    },
    additionalMembers:[
        {
            tharId:{
                type: String
            }
        }
    ],
    teamName : {
        type: String,
        default: "Default"
    }
},
{
    timestamps: true,
})

const normalEvent = mongoose.models.normalEvent ||  mongoose.model("normalEvent", schema) ;
export default normalEvent;