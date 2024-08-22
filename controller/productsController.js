import { getProductsDb,selectProductsDb ,deleteProductDb,updateProductDb,insertProductDb} from '../model/productsDb.js'
// import {hash} from 'bcrypt'

const getProducts =async(req,res)=>{
    try{
          res.json(await getProductsDb()) 
        //   res.status(200).send()
    }catch(e){
        res.status(404).send('Sever not reached!')
    }
 
}

const selectProduct = async(req,res)=>{
    // console.log(req.params.id);
    try{
        
         res.json(await selectProductsDb(req.params.id))
    }catch(e){
        res.status(400).send('Product not found !')
    }
   
    // res.send('Endpoint reached !')
    
}

const insertProduct =async(req,res)=>{
    try{
    let {prodName,quantity,amount,Category,prodUrl,prodDescription}= req.body
       
         await insertProductDb(prodName,quantity,amount,Category,prodUrl,prodDescription)
                res.send('Data was inserted successfully !')
       }catch(e){
                res.send('All fields must be filled in , re-insert data !')
            }
        
        
    
}
const deleteProduct = async(req,res)=>{
    try{
         await deleteProductDb(req.params.id)
    res.send('Data was deleted successfully ! ')
}
   catch(e){
        res.status(400).send('Try again !')
    }
   
 }
const updateProduct=async(req,res)=>{
       try{

       
    let {prodName,quantity,amount,Category,prodUrl,prodDescription}=req.body
    console.log(req.body);

    let product =await selectProductsDb(req.params.id)
    prodName ? prodName=prodName: prodName = product.prodName
    quantity? quantity=quantity: quantity = product.quantity
    amount? amount=amount: amount = product.amount
    Category ? Category=Category: Category = product.Category
    prodUrl ? prodUrl=prodUrl : prodUrl =product.prodUrl
    prodDescription ? prodDescription=prodDescription : prodDescription =product.prodDescription
    res.json({
        results: await updateProductDb(prodName,quantity,amount,Category,prodUrl,prodDescription, req.params.id),
        msg: 'Data was successfully updated ! '
    })}catch(e){
        res.status(500).send('Server error !!')
    }
    // res.send('Data was successfully updated ! ')
    
}
export{getProducts,selectProduct,deleteProduct,updateProduct,insertProduct}