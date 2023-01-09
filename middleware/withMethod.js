


export default function withMethod(handler,methods){
    return (req,res)=>{
        if(!methods.includes(req.method)){
            return res.status(405).json({error:true,message:'Method not allowed'})
        }
        return handler(req,res)
    }
}