import React from 'react'                                   ///metirial ui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material';
import{NavLink}from'react-router-dom'


function Navbar() {
  const Header=styled(AppBar)`
  background:black;
  position:static
  `
  const Tabs=styled(NavLink)`
  color: red;
  font-size:20px;
  margin-right:20px
  `
  

  return (
    <Header>
        <Toolbar>
            <Tabs to="/">CodeForInteview</Tabs>
            <Tabs to="/all">All Users</Tabs>
            <Tabs to="/add">Add User</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar
