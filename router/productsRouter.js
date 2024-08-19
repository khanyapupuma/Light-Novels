import express from 'express'
import {getProducts,selectProduct} from '../controller/productsController.js'
// import { checkUser } from '../middleware/authenticate.js'
const router = express.Router()
router.get('/',getProducts)
router.get('/:id',selectProduct)
// router.post('/insert',insertUser)
// router.post('/login',checkUser,loginUser)


// router.route('/:id').get(selectUser)
// router.delete('/delete/:id',deleteUser)
// router.patch('/edit/:id',updateUser)




export default router