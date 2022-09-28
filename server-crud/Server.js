import express, { Router } from "express";
import Connecton from "./database/db.js";
import dotenv from 'dotenv'
import Routes from './routes/route.js'
import cors from 'cors'
import bodyParser from "body-parser";     // req body parse

const app=express()
dotenv.config();



//for fix cors
app.use(cors());

app.use(bodyParser.json({extended:true})); //   post data is in json format 
app.use(bodyParser.urlencoded({extended:true})); //  for encode url


app.use(Routes);



const port=8000;   


const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connecton(username,password);

app.listen(port,()=>{
       console.log(`server is running success fully on port ${port}`)
})
