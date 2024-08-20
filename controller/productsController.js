import { getProductsDb,selectProductsDb ,deleteProductDb,updateProductDb} from '../model/productsDb.js'
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

const updateProduct=async(req,res)=>{
       
    let {prodName,quantity,amount,Category,prodUrl}=req.body
    console.log(req.body);

    let product =await selectProductsDb(req.params.id)
    prodName ? prodName=prodName: prodName = product.prodName
    quantity? quantity=quantity: quantity = product.quantity
    amount? amount=amount: amount = product.amount
    Category ? Category=Category: Category = product.Category
    prodUrl ? prodUrl=prodUrl : prodUrl =product.prodUrl
    res.json({
        results: await updateProductDb(prodName,quantity,amount,Category,prodUrl, req.params.id),
        msg: 'Data was successfully updated ! '
    })
    // res.send('Data was successfully updated ! ')
    
}
export{getProducts,selectProduct,deleteProduct,updateProduct}