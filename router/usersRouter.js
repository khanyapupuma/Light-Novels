import express from 'express'
import {getUsers,selectUser,insertUser,deleteUser,loginUser,updateUser} from '../controller/usersController.js'
import { checkUser } from '../middleware/authenticate.js'
const router = express.Router()
router.get('/',getUsers)
router.get('/:id',selectUser)
router.post('/register',insertUser)
router.delete('/delete/:id',deleteUser)
router.post('/login',checkUser,loginUser)


// router.route('/:id').get(selectUser)

router.patch('/update/:id',updateUser)




export default router