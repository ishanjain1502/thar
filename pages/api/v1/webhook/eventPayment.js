import connectDB from "../../../../lib/mongodb";
import tharUser from "../../../../schema/tharUser/tharUsers";
import payment from "../../../../schema/payment/payment";
import withValidation from "../../../../middleware/withValidation";
import validationSchema from "../../../../validators/v1/payment/eventPayment";
import normalEvent from "../../../../schema/events/normalEvent";

connectDB(); // connecting to db

const creditAndEventChecker = async(tharId) => {
    const user = await tharUser.findOne({
        userTharID: tharId
    })

    if(!user){
        return 401
    }else{
        if(user.credits == 0){
            return 402
        }
        return 200
    }    
}

const deductCreditAndAddEvent = async(tharId, event) => {
    await tharUser.findOneAndUpdate({
        userTharID : tharId
    },{
        $inc : {credits: -1},
        $push: { events: event } 
    })
}

const handler = async(req,res) => {

    try{

        const {event, participant , additionalMembers} = req.body;
        let resp = await creditAndEventChecker(participant);
 
        if(resp < 400){
 
            if(additionalMembers){
                for(let i=0; i<additionalMembers.length ; i++){
                    resp = await creditAndEventChecker(additionalMembers[i].tharId);
                    if(resp > 400) break;
                }
            }
        }

        if(resp === 401 ){
            return res.status(401).json({
                code : 401,
                error : true,
                message : "Thar id does not exists --transaction aborted"
            })
        }else if(resp === 402 ){
            return res.status(402).json({
                code : 402,
                error : true,
                message : "User does not have enough credits --transaction aborted"
            })
        }
        
        await deductCreditAndAddEvent(participant, event);
        if(additionalMembers){
            for(let i=0; i<additionalMembers.length ; i++){
                await deductCreditAndAddEvent(additionalMembers[i].tharId, event)
            }
        }

        // create team for event --
        const createTeam = await normalEvent.create({
            captainTharId: participant,
            eventName: event,
            additionalMembers: additionalMembers
        })

        return res.status(200).json({
            code : 200,
            error: false,
            message : req.body
        })

    }catch(error){
        return res.status(403).json({
            code : 403,
            error : false,
            message : "Something went wrong"
        })
    }
}


export default withValidation(handler , validationSchema , 'PUT');