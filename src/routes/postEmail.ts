import Router ,{Response,Request} from "express"


export const routeNewEmail = Router()

routeNewEmail.post('/',(req:Request,res:Response)=>{ 
    try{
        const { emailForSub } = req.body;
        console.log(emailForSub)
        return(res.status(200).json({message:"created"}))
    }catch(error){
        console.log(error)
        return(res.status(200).json({message:"not created"}))
    }
    
})
