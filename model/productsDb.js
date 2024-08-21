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

       const insertProductDb =async(prodName,quantity,amount,Category,prodUrl,prodDescription)=>{
        let [data] =await pool.query(`
            INSERT INTO products(prodName,quantity,amount,Category,prodUrl,prodDescription)
            VALUES (?,?,?,?,?,?)
            `,[prodName,quantity,amount,Category,prodUrl,prodDescription])
         return data
        }  
       
const updateProductDb=async(prodID,prodName,quantity,amount,Category,prodUrl,prodDescription )=>{
        
        await pool.query('UPDATE products SET prodName = ?, quantity= ?, amount= ?, Category = ?, prodUrl= ?, prodDescription=? WHERE prodID = ?', [prodID,prodName,quantity,amount,Category,prodUrl,prodDescription]);

      }; 
export {getProductsDb,selectProductsDb,deleteProductDb,updateProductDb,insertProductDb}