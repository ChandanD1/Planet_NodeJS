import express from 'express'
import connectDB from './dbconnection.js'
import planetRouter from './controllers/planetController.js'



const app =express();

//middleware
app.use(express.json())

//database
connectDB();

app.use("/planets",planetRouter)


app.listen(8099,()=>{
    console.log("server is running on port 8099")
})