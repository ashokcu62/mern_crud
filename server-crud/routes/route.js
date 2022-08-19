import express from "express";

const router=express();

router.post('/add',(req,res,next)=>{
    console.log("add page")
    res.end()
    next()
})

export default router;