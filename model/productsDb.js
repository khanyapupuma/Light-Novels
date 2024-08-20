import {pool} from '../config/config.js'

const getProductsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM products ")
    return data
}
const selectProductsDb =  async(prodID)=>{
    let [data] = await pool.query('SELECT *FROM products WHERE prodID = ?',[prodID])
    return data; 
    
    
}
const deleteProductDb=async(prodID)=>{
    await pool.query(' DELETE FROM products WHERE prodID = ?',[prodID])
           // return data 
       }
       
const updateProductDb=async(prodName,quantity,amount,Category,prodUrl, prodID)=>{
        
        await pool.query('UPDATE users SET prodName = ?, quantity= ?, amount= ?, Category = ?, prodUrl= ?WHERE prodID = ?', [prodName,quantity,amount,Category,prodUrl, prodID]);

      }; 
export {getProductsDb,selectProductsDb,deleteProductDb,updateProductDb}