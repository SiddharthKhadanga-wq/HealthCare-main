//Importing Libraries
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import cors from "cors";
//Importing routes
import medicationRoutes from "./routers/medicationRoute.js";
import refillRoutes from "./routers/refillRoute.js";


//Initializing
dotenv.config();
const app=express()
connectDB();

//Constants
const port=process.env.PORT

// Middleware
app.use(bodyParser.json());
app.use(cors());



app.use('/api/medication', medicationRoutes);
app.use('/api/refills', refillRoutes);





app.get("/",(req,res)=>{
    res.send("Hello World")
})

//running server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})