import Joi from "joi"

const validationSchema = Joi.object({
    teamName: Joi.string().min(3).max(20).trim().required(),
    captainName: Joi.string().min(3).max(30).trim().required(),
    captainPhoneNo: Joi.string().min(10).max(13).trim().required(),
    // captainEmail: Joi.string().max(50).trim().lowercase().required()
    // .pattern(new RegExp('^[A-Za-z0-9](\.?[A-Za-z0-9]){5,}@gmail\.com$')) // accept only gmails
    // .message('Enter a valid Gmail address'),
    botName: Joi.string().min(3).max(30).trim().required(),
    category: Joi.string().valid('15KG','30KG').required(),
    address: Joi.string().min(3).max(100).trim().required(),
    college: Joi.string().min(0).max(100).trim(),
    additionalMembers: Joi.array().items(
        Joi.object({ 
             name: Joi.string().min(3).max(30).trim(), 
             email: Joi.string().min(3).max(50).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim(),
             phoneNo: Joi.string().min(10).max(13).trim()
        })
    ),
    payment: Joi.object({
        txnId: Joi.string().min(3).max(50).trim().required(),
    })
})

export default validationSchema;
