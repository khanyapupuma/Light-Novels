import { getProductsDb,selectProductsDb ,deleteProductDb} from '../model/productsDb.js'
// import {hash} from 'bcrypt'

const getProducts =async(req,res)=>{
    
    res.json(await getProductsDb())
}
const selectProduct = async(req,res)=>{
    console.log(req.params.id);
    res.json(await selectProductsDb(req.params.id))
    // res.send('Endpoint reached !')
    
}
const deleteProduct = async(req,res)=>{
    res.json(await deleteProductDb(req.params.id))
    res.send('Data was deleted successfully ! ')
}


export{getProducts,selectProduct,deleteProduct}