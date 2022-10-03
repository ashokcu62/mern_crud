import React, { useState } from 'react'
import { Table, TableBody, TableHead, TableCell, TableRow ,Button} from '@mui/material'
import { useEffect } from 'react'
import { getUsers } from '../../Services/api'
import styled from '@emotion/styled'
import { Link, useNavigate } from 'react-router-dom'


const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
`
const THead = styled(TableRow)`
background:#000000;
&>th{
  color:#fff
  ;font-size:20px;
}`

const TBody = styled(TableRow)`
&>td{
  font-size:15px;
}
`



function AllUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    let response = await getUsers()
    setUsers(response.data)
    console.log(response.data)
  }
  return (
    <div>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>phone</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {
            users.map((user =>
              <TBody>
                <TableCell>{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                  <Button  variant="contained" color="secondary">Delete</Button>
                </TableCell>
              </TBody>
            ))
          }   
        </TableBody>
      </StyledTable>
    </div>
  )
}

export default AllUsers

