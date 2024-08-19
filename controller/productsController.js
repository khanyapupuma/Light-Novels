import { getProductsDb,selectProductsDb } from '../model/productsDb.js'
// import {hash} from 'bcrypt'

const getProducts =async(req,res)=>{
    
    res.json(await getProductsDb())
}
const selectProduct = async(req,res)=>{
    console.log(req.params.id);
    res.json(await selectProductsDb(req.params.id))
    // res.send('Endpoint reached !')
    
}
export{getProducts,selectProduct}