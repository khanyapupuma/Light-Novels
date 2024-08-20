import express from 'express'
import {getProducts,selectProduct,deleteProduct} from '../controller/productsController.js'
// import { checkUser } from '../middleware/authenticate.js'
const router = express.Router()
router.get('/',getProducts)
router.get('/:id',selectProduct)
router.delete('/delete/:id',deleteProduct)
// router.post('/insert',insertUser)
// router.post('/login',checkUser,loginUser)


// router.route('/:id').get(selectUser)

// router.patch('/edit/:id',updateUser)




export default router