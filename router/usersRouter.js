import express from 'express'
import {getUsers,selectUser,insertUser} from '../controller/usersController.js'
// import { checkUser } from '../middleware/authenticate.js'
const router = express.Router()
router.get('/',getUsers)
router.get('/:id',selectUser)
router.post('/insert',insertUser)
// router.post('/login',checkUser,loginUser)


// router.route('/:id').get(selectUser)
// router.delete('/delete/:id',deleteUser)
// router.patch('/edit/:id',updateUser)




export default router