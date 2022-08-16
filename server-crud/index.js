import express from "express";
import Connecton from "./database/db.js";
import dotenv from 'dotenv'
import routes from './routes/route.js'
import cors from 'cors'

const app=express()
dotenv.config();

app.use(cors());
app.use('/',routes)



const port=8000;   


const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connecton(username,password);

app.listen(port,()=>{
       console.log(`server is running success fully on port ${port}`)
})
