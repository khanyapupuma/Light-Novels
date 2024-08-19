import express from 'express'
import usersRouter from './router/usersRouter.js'
import productsRouter from './router/productsRouter.js'
import cors from 'cors'

const app =express()
app.use(cors({origin :'http://localhost:8080',credentials:true}))
let port=process.env.PORT || 5005
app.use(express.json())

app.use('/users',usersRouter)
app.use('/products',productsRouter)

app.use(express.static('public'))

app.listen(port,()=>{
    console.log("http://localhost:" +port);
})