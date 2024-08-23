import { getUsersDb,selectUsersDb,insertUserDb,deleteUserDb,updateUserDb,selectUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const getUsers =async(req,res)=>{
    try{
    res.json(await getUsersDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectUser = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectUserDb(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get user !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertUser =async(req,res)=>{
    

    
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile}= req.body
    let exisitingEmail = (await selectUsersDb(emailAdd)).emailAdd
    if (emailAdd == exisitingEmail) {
        res.status(403).send('Email already exisits')
        return
    } else{
        userRole = 'user'    b 
        userProfile = 'https://codjoelmayer.github.io/projectImages/images/profile-Image.png'
        
        hash(userPass,10,async(err,hashedP)=>{
            if(err) throw err
            console.log(hashedP);
            
            try{
                await insertUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP,userProfile)
                res.send('Data was inserted successfully !')
            }catch(e){
                res.status(400).send('All fields must be filled in , re-insert data !')
            }
        })
        
    }
}
    //     
    
       
    
const deleteUser = async(req,res)=>{
    try{
       await deleteUserDb(req.params.id)
    res.status(200).send('Data was deleted successfully ! ') 
    }catch(e){
        res.status(400).send('Invalid User !')
    }
    
}
    const updateUser=async(req,res)=>{
       try{

       
        let {firstName,lastName,userAge,Gender,emailAdd,userProfile}=req.body
        console.log(req.body);

        let user =await selectUserDb(req.params.id)
        firstName ? firstName=firstName: firstName = user.firstName
        lastName? lastName=lastName: lastName = user.lastName
        userAge ? userAge=userAge: userAge = user.userAge
        Gender ? Gender=Gender: Gender = user.Gender
        emailAdd ?  emailAdd= emailAdd:  emailAdd = user. emailAdd
        userProfile ?   userProfile=  userProfile:   userProfile = user.  userProfile
        res.json({
            results: await updateUserDb(firstName,lastName,userAge,Gender,emailAdd,userProfile, req.params.id),
            msg: 'Data was successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }
   
 const loginUser =(req,res)=>{
    try{
      res.json({message:"Successfully Logged in!!",token :req.body.token})     
    }catch(e){
        res.send('Register first if you do not have login credentials ! ')
    }
 
    
    
    
}

export{getUsers,selectUser,insertUser,deleteUser,updateUser,loginUser}