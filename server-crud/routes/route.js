import express from "express";
import {addUser,getUsers}from '../controller/user-controller.js'
const router=express.Router();

// routes -----------------

router.post('/add',addUser)
router.get('/all',getUsers)

export default router;