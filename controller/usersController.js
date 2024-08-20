import { getUsersDb,selectUsersDb,insertUserDb,deleteUserDb,updateUserDb} from '../model/usersDb.js'
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
    const deleteUser = async(req,res)=>{
        res.json(await deleteUserDb(req.params.id))
        res.send('Data was deleted successfully ! ')
    }
    const updateUser=async(req,res)=>{
       
        let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile}=req.body
        console.log(req.body);

        let user =await getUsersDb(req.params.id)
        firstName ? firstName=firstName: firstName = user.firstName
        lastName? lastName=lastName: lastName = user.lastName
        userAge ? userAge=userAge: userAge = user.userAge
        Gender ? Gender=Gender: Gender = user.Gender
        res.json(await updateUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile, req.params.id))
        res.send('Data was successfully updated ! ')
        
    }
 const loginUser =(req,res)=>{
    res.json({message:"Successfully Logged in!!",token :req.body.token})
}

export{getUsers,selectUser,insertUser,deleteUser,updateUser,loginUser}