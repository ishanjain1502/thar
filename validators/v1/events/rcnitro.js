import Joi from "joi";

const validationSchema = Joi.object({
    teamName : Joi.string().trim().min(3).max(20).required(),
    teamLeaderName : Joi.string().trim().min(3).max(30).required(), 
    teamLeaderPhone : Joi.string().trim().min(10).max(13).required(),
    // teamLeaderEmail : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().min(16).max(50).required(),
    address : Joi.string().trim().min(3).max(100).required(),
    college : Joi.string().trim().min(0).max(100),
    additionalMembers : Joi.array().items(
        Joi.object({ 
             name: Joi.string().min(3).max(30).trim(), 
             email: Joi.string().min(3).max(50).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim(),
             phoneNo: Joi.string().min(10).max(13).trim()
        })
    ),
    payment : Joi.object({
        txnId : Joi.string().trim().min(3).max(100).required()
    })
})

export default validationSchema;