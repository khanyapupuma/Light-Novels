import {pool} from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query("SELECT * FROM users ")
    return data
}
const selectUsersDb =  async(userID)=>{
    let [data] = await pool.query('SELECT *FROM users WHERE userID = ?',[userID])
    return data; 
    
    
}
const insertUserDb =async(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)=>{
    let [data] =await pool.query(`
        INSERT INTO users(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)
        VALUES (?,?,?,?,?,?,?,?)
        `,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile])
     return data
    }

export {getUsersDb,selectUsersDb,insertUserDb}