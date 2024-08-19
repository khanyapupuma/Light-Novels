import {pool} from '../config/config.js'

const getProductsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM products ")
    return data
}
const selectProductsDb =  async(prodID)=>{
    let [data] = await pool.query('SELECT *FROM products WHERE prodID = ?',[prodID])
    return data; 
    
    
}
export {getProductsDb,selectProductsDb}