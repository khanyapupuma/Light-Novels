import {pool} from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query("SELECT * FROM users ")
    return data
}
const selectUsersDb =  async(emailAdd)=>{
    let [[data]] = await pool.query('SELECT *FROM users WHERE emailAdd= ?',[emailAdd])
    return data? data : ''; 
    
    
}
const selectUserDb =  async(userID)=>{
    let [[data]] = await pool.query('SELECT *FROM users WHERE userID= ?',[userID])
    return data; 
    
    
}
const insertUserDb =async(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)=>{
    let [data] =await pool.query(`
        INSERT INTO users(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)
        VALUES (?,?,?,?,?,?,?,?)
        `,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile])
     return data
    }
    const deleteUserDb=async(userID)=>{
        await pool.query(' DELETE FROM users WHERE userID = ?',[userID])
               // return data 
           }

    const updateUserDb=async(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile, userID)=>{
        
          await pool.query('UPDATE users SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole= ?, emailAdd = ? ,userPass = ? ,userProfile = ? WHERE userID = ?', [firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile, userID]);

        }; 
    

export {getUsersDb,selectUsersDb,insertUserDb,deleteUserDb,updateUserDb,selectUserDb}