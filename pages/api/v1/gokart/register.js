import connectDB from '../../../../lib/mongodb'
import withValidation from '../../../../middleware/withValidation'
import validationSchema from '../../../../validators/v1/events/goKart'
import goKart from '../../../../schema/events/gokart';
import { handleError } from '../../../../utility/handleError';

connectDB();

const handler = async(req,res) => {
    try{

        const newTeam = await goKart.create({captainEmail:req.session.user.email, ...req.body})
        res.status(200).json({ error: false, message: 'success',  })

    }catch(err){
        console.log(err);
        handleError(res , "error occurred try again!");
    }
}

export default withValidation(handler, validationSchema , 'POST')