import React from 'react'
import { FormControl, FormGroup, Input, InputLabel, TextField, Typography, styled ,Button} from '@mui/material';
import { useState } from 'react';
import { addUser } from '../../Services/api';

//==================Styles==============//
const Container = styled(FormGroup)`
  width:50%;
  margin: 5% auto 0 auto;
  &>div{
    margin-top:20px;
  }
  `


function AddUser() {
  
  //===============object ==================
const defautValue={
  name:"",
  username: "",
  email: "",
  password: "",
  phone: "",
  }
  //============================

  const[user,setUser]=useState(defautValue)
  const handleSubmit=(e)=>{
    
    /*console.log(e.target.name,e.target.value)*/
    setUser({...user,[e.target.name]:e.target.value})  //if key and value are  also variables in those case key will be under squire brackt

  }

  const addUserDetails= async()=>{
    await addUser(user)
  }
  
  const display=()=>{
    console.log(user)
  }

  return (
    <div>

      <Container>
        <Typography variant="h4"> Add User</Typography>
    
        <FormControl>
          <InputLabel>name</InputLabel>
          <Input
           onChange={(e)=>handleSubmit(e)}
           name="name"
           />
        </FormControl>

        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
          onChange={(e)=>handleSubmit(e)}
          name="username"
           />
        </FormControl>

        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
           onChange={(e)=>handleSubmit(e)}
           name="email"
          />
        </FormControl>

        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
           onChange={(e)=>handleSubmit(e)}
           name="phone"
          />
        </FormControl>

        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
           onChange={(e)=>handleSubmit(e)}
           name="password"
          />
        </FormControl>
        <FormControl>  
        <Button variant="contained"  onClick={addUserDetails}>Add User</Button>
        </FormControl>

      </Container>
    </div>
  )
}

export default AddUser
