import Joi from "joi";

const validationSchema = Joi.object({
    tharId : Joi.string().min(13).max(13).required(),
    amount : Joi.string().min(3).max(6).required(),
    transactionId : Joi.string().required()
})

export default validationSchema