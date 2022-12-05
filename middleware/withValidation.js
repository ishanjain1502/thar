


export default function withValidation(handler, schema) {
    return (req, res) => {
        const { error, value } = schema.validate(req.body);
        if (error) {
            const message = error.details[0].message.replace(/"/g, '');
            const field = error.details[0].path[0]
            return res.status(400).json({ error: true, message, field })
        }
        req.body = value
        return handler(req, res)

    }
}