import mongoose from "mongoose";

export default function connectDB(){
    mongoose.connect("mongodb://localhost:27017/SolarSystem").then(()=>{
        console.log("Database Conneted")
    }).catch((err)=>{
        console.log(err)
    })
}