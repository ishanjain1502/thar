import Joi from "joi"

const validationSchema = Joi.object({
    teamName: Joi.string().min(3).max(20).trim().required(),
    captainName: Joi.string().min(3).max(30).trim().required(),
    captainPhoneNo: Joi.string().min(10).max(13).trim().required(),
    captainEmail: Joi.string().max(50).trim().lowercase().required()
    .pattern(new RegExp('^[A-Za-z0-9](\.?[A-Za-z0-9]){5,}@gmail\.com$')) // accept only gmails
    .message('Enter a valid Gmail address'),
    boatName: Joi.string().min(3).max(30).trim().required(),
    category: Joi.string().valid('15KG','30KG').required(),
    address: Joi.string().min(3).max(100).trim().required(),
    college: Joi.string().min(3).max(100).trim(),
    additionalMembers: Joi.array().items(
        Joi.object({ 
             name: Joi.string().min(3).max(30).trim(), 
             email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
             phoneNo: Joi.string().min(10).max(13).trim()
        })
    ),
    payment: Joi.object({
        txnId: Joi.string().min(1).max(50).required(),
        amount: Joi.string().min(1).max(6).required(),
    })
})

export default validationSchema;
