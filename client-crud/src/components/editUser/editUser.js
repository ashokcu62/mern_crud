import React from 'react'
import { FormControl, FormGroup, Input, InputLabel, TextField, Typography, styled, Button } from '@mui/material';
import { useState } from 'react';
import { getUser ,editUser} from '../../Services/api';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';

//==================Styles==============//
const Container = styled(FormGroup)`
  width:50%;
  margin: 5% auto 0 auto;
  &>div{
    margin-top:20px;
  }
  `

function EditUser() {

    //===============object ==================
    const defautValue = {
        name: "",
        username: "",
        email: "",
        phone: "",
    }
    //============================

    const { id } = useParams()   // to get url data

    const [user, setUser] = useState(defautValue)

    useEffect(() => {
        loadUserDetails()
    }, [])
    const navigate = useNavigate()

    const loadUserDetails = async () => {
        const response = await getUser(id)
        setUser(response.data)
    }



    
    const handleSubmit = (e) => {

        /*console.log(e.target.name,e.target.value)*/
        setUser({ ...user, [e.target.name]: e.target.value })  //if key and value are  also variables in those case key will be under squire brackt

    }

    const editUserDetails = async () => {
        await editUser(user,id).then(() => {
            navigate('/all')
        })
    }

    const display = () => {
        console.log(user)
    }

    return (
        <div>

            <Container>
                <Typography variant="h4"> Edit User</Typography>

                <FormControl>
                    <InputLabel>name</InputLabel>
                    <Input
                        onChange={(e) => handleSubmit(e)}
                        name="name"
                        value={user.name}
                        required
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input
                        onChange={(e) => handleSubmit(e)}
                        name="username"
                        value={user.username}
                        required
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input
                        onChange={(e) => handleSubmit(e)}
                        name="email"
                        value={user.email}
                        required
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input
                        onChange={(e) => handleSubmit(e)}
                        name="phone"
                        value={user.phone}
                        required
                    />
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={editUserDetails}>Edit</Button>
                </FormControl>

            </Container>
        </div>
    )
}

export default EditUser
