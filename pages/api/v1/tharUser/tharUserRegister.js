import connectDB from '../../../../lib/mongodb'
import withValidation from '../../../../middleware/withValidation'
import validationSchema from '../../../../validators/v1/ca/register'
import tharUser from '../../../../schema/tharUser/tharUsers'
import user from '../../../../schema/ca/users'



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
        
        let tharID = "THAR'23-";
        const random = generateString(6);
        tharID = tharID + random;
        const data = await tharUser.create({ ...req.body, userTharID : tharID });
        // console.log("data is:------", data);
        res.status(200).json({ error: false, message: 'success', data: data.userTharID  })

    } catch (error) {
        if (error.code === 11000) {
            return res.status(403).json({ error: true, message: 'Email already exists' })
        }

        console.log("errrrrr------", error)
        res.status(500).json({ error: true, message: 'error occurred try again!' })
    }


}


export default withValidation(handler, validationSchema);



// TharUserRegistation Start-------------------------



// TharUserRegistation End-------------------------



