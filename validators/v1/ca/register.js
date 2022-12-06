// name, email, phone, college, rollNo, degree, address, pincode
import Joi from "joi"

const validationSchema = Joi.object({
    name: Joi.string().min(3).max(30).trim().required(),
    email: Joi.string().max(50).trim().lowercase().required()
        .pattern(new RegExp('^[A-Za-z0-9](\.?[A-Za-z0-9]){5,}@gmail\.com$')) // accept only gmails
        .message('Enter a valid Gmail address'),
    phone: Joi.string().min(10).max(13).trim().required(),
    college: Joi.string().min(3).max(100).trim().required(),
    rollNo: Joi.string().min(2).max(50).trim().required(),
    degree: Joi.string().min(2).max(50).trim().required(),
    year: Joi.string().min(1).max(20).trim().required(),
    address: Joi.string().min(5).max(100).trim().required(),
    pincode: Joi.string().required()
        .pattern(new RegExp('^[0-9]{6}$'))
        .message('Enter a valid 6 digit pincode'),

})

export default validationSchema;
