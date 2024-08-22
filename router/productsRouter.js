import express from 'express'
import {getProducts,selectProduct,deleteProduct, updateProduct,insertProduct} from '../controller/productsController.js'
// import { checkUser } from '../middleware/authenticate.js'
const router = express.Router()
router.get('/',getProducts)
router.get('/:id',selectProduct)
router.delete('/delete/:id',deleteProduct)
router.post('/addProduct',insertProduct)
// router.post('/login',checkUser,loginUser)


// router.route('/:id').get(selectUser)

router.patch('/update/:id',updateProduct)




export default router