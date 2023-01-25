import Joi from "joi";

const validationSchema = Joi.object({
    teamName : Joi.string().trim().min(3).max(20).required(),
    captainName : Joi.string().trim().min(3).max(30).required(), 
    captainPhoneNo : Joi.string().trim().min(10).max(13).required(),
    // captainEmail : Joi.string().trim().min(16).max(50).required()
    // .pattern(new RegExp('^[A-Za-z0-9](\.?[A-Za-z0-9]){5,}@gmail\.com$'))
    // .message('Enter a valid Gmail address'),
    driverName : Joi.string().trim().min(3).max(30).required(),
    driverPhoneNo : Joi.string().trim().min(10).max(13).required(),
    driverEmail : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().min(16).max(50).required(),
    coDriverName : Joi.string().trim().min(3).max(30).required(),
    coDriverPhoneNo : Joi.string().trim().min(10).max(13).required(),
    coDriverEmail : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().min(16).max(50).required(),
    coCaptainName : Joi.string().trim().min(3).max(30).required(),
    coCaptainPhoneNo : Joi.string().trim().min(10).max(13).required(),
    coCaptainEmail : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().min(16).max(50).required(),
    mentorName : Joi.string().trim().min(3).max(30).required(),
    mentorPhoneNo : Joi.string().trim().min(10).max(13).required(),
    mentorEmail : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().min(16).max(50).required(),
    address : Joi.string().trim().min(3).max(100).required(),
    college : Joi.string().trim().min(3).max(100).required(),
    additionalMembers : Joi.object({
        name : Joi.string().trim().min(3).max(30),
        phoneNo : Joi.string().trim().min(10).max(13),
        email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim().min(16).max(50),
    }),
    payment : Joi.object({
        txnId : Joi.string().trim().min(3).max(100).required(),
        amount : Joi.string().trim().min(1).max(6).required()
    })
})

export default validationSchema;