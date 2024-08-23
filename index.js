import express from 'express'
import usersRouter from './router/usersRouter.js'
import productsRouter from './router/productsRouter.js'
import cors from 'cors'

const app =express()
let port=process.env.PORT || 5005
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/users',usersRouter)
app.use('/products',productsRouter)


app.listen(port,()=>{
    console.log("http://localhost:" +port);
})