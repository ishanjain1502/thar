

export const handleError=(res,message)=>{

    if(message === "unauthroized"){
        return res.status(401).json({error:true, message})
    }
    if(message === "error occurred try again!"){
        return res.status(500).json({error:true, message})
    }
}