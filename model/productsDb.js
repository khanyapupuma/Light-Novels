import {pool} from '../config/config.js'

const getProductsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM products ")
    return data
}
const selectProductsDb =  async(prodID)=>{
    let [[data]] = await pool.query('SELECT *FROM products WHERE prodID = ?',[prodID])
    return data; 
    
    
}
const deleteProductDb=async(prodID)=>{
    await pool.query(' DELETE FROM products WHERE prodID = ?',[prodID])
           // return data 
       }
       
const updateProductDb=async(prodID,prodName,quantity,amount,Category,prodUrl )=>{
        
        await pool.query('UPDATE products SET prodName = ?, quantity= ?, amount= ?, Category = ?, prodUrl= ? WHERE prodID = ?', [prodID,prodName,quantity,amount,Category,prodUrl]);

      }; 
export {getProductsDb,selectProductsDb,deleteProductDb,updateProductDb}