import {compare} from 'bcrypt'
import { selectUsersDb } from '../model/usersDb.js'
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()
const checkUser=async(req,res,next)=>{
    const {userProfile,userPass} =req.body
    let hashedP =(await selectUsersDb(userProfile))
    console.log(hashedP);

let result = await compare(userPass,hashedP )
// console.log(result);

        if(result ==true) {
            let token =jwt.sign({userProfile:userProfile},process.env.SECRET_KEY,{expiresIn : '24hr'})
            // console.log(token);
             
            req.body.token =token
            next()
        } else{
                res.send("Please sign in with the correct User Profile  OR Password  !!")  
        }

  


}
const verifyAToken =(req,res,next)=>{
    let {cookie} =req.headers
    //checks if the token exists first
    let token = cookie && cookie.split ('=')[1]
    // console.log(cookie);
    
    jwt.verify(token ,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.json({message:'Token invalid'})
        }else{
              req.body.user =decoded.userProfile
        // console.log(decoded);
           
        }
   
    })
    next()
}

export {checkUser,verifyAToken}