import React, { useState } from 'react'
import { Table, TableBody, TableHead, TableCell, TableRow } from '@mui/material'
import { useEffect } from 'react'
import { getUsers } from '../../Services/api'

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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>name</TableCell>
            <TableCell>username</TableCell>
            <TableCell>email</TableCell>
            <TableCell>phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map((obj =>
              <TableRow>
                <TableCell>{obj._id}</TableCell>
                <TableCell>{obj.name}</TableCell>
                <TableCell>{obj.username}</TableCell>
                <TableCell>{obj.email}</TableCell>
                <TableCell>{obj.phone}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AllUsers

