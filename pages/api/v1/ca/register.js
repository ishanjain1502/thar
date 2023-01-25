import connectDB from '../../../../lib/mongodb'
import withValidation from '../../../../middleware/withValidation'
import validationSchema from '../../../../validators/v1/ca/register'
import user from '../../../../schema/ca/users'
import { handleError } from '../../../../utility/handleError'


connectDB();  // connect to db

function generateString(length) {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz';

    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;

}

const handler = async (req, res) => {


    try {
        let caID = 'CA-';
        const random = generateString(6);
        caID = caID + random;
        const data = await user.create({email:req.session.user.email, ...req.body, referralCode: caID });
        res.status(200).json({ error: false, message: 'success', data: data.referralCode })

    } catch (error) {
        if (error.code === 11000) {
            return res.status(403).json({ error: true, message: 'Email already exists' })
        }
        handleError(res,"error occurred try again!");
    }


}

export default withValidation(handler, validationSchema, 'POST');

