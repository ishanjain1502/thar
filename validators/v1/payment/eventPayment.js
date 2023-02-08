import Joi from "joi";

const validationSchema = Joi.object({
    event : Joi.string().required(),
    participant: Joi.string().length(13).required(),
    additionalMembers: Joi.array().items(
        Joi.object({ 
            tharId: Joi.string().length(13).optional()
        })
    )
})

export default validationSchema;