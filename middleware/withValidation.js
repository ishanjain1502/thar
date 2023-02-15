import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { handleError } from "../utility/handleError";

export default function withValidation(handler, schema,method) {
    return async(req, res) => {
        const session = await unstable_getServerSession(req, res, authOptions);
        if(!session){
            return handleError(res,"unauthroized");
        }
        req.session=session;

        if (method !== req.method) {
            return res.status(405).json({ error: true, message: 'Method not allowed' })
        }

        if(schema){
            const { error, value } = schema.validate(req.body);
            if (error) {
                const message = error.details[0].message.replace(/"/g, '');
                const field = error.details[0].path[0]
                return res.status(400).json({ error: true, message, field })
            }
            req.body = value
        }
        return handler(req, res)

    }
}