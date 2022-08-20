import express from "express";
import {addUser}from '../controller/user-controller.js'
const router=express.Router();

// routes -----------------

router.post('/add',addUser)

export default router;