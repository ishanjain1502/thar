import connectDB from '../../../../lib/mongodb'
import withValidation from '../../../../middleware/withValidation'
import validationSchema from '../../../../validators/v1/events/gokart'
import goKart from '../../../../schema/events/gokart';
import { handleError } from '../../../../utility/handleError';

connectDB();

const handler = async(req,res) => {
    try{

        const newTeam = await goKart.create({captainEmail:req.session.user.email, ...req.body})
        res.status(200).json({ error: false, message: 'success',  })

    }catch(error){
        console.log("error in gokart-register.js page----",error);
        if (error.code === 11000) {
            return res.status(403).json({ error: true, message: 'You have already registered!' })
        }
        handleError(res,"error occurred try again!");
    }
}

export default withValidation(handler, validationSchema , 'POST')