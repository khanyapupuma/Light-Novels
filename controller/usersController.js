import { getUsersDb,selectUsersDb,insertUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const getUsers =async(req,res)=>{
    
    res.json(await getUsersDb())
}

const selectUser = async(req,res)=>{
    console.log(req.params.id);
    res.json(await selectUsersDb(req.params.id))
    // res.send('Endpoint reached !')
    
}

const insertUser =async(req,res)=>{
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile}= req.body

     hash(userPass,10,async(err,hashedP)=>{
        if(err) throw err
        console.log(hashedP);
        
      await insertUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP,userProfile)
     })
       
        res.send('Data was inserted successfully !')
    }


export{getUsers,selectUser,insertUser}