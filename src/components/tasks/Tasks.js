import React, { useEffect, useState } from 'react'
import Table from '@mui/joy/Table';
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Link from '@mui/material/Link'

function Tasks () {
  const [tasks, setTasks] = useState([])
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/task/')
    .then(res => res.json())
    .then(data => {
      console.table(data)
      setTasks(data)
    })
    fetch('http://127.0.0.1:8000/user/')
    .then(res => res.json())
    .then(data => {
      console.table(data)
      setUsers(data)
    })
  }, [])

    function priorityLevel (priority) {
      if ( priority < 4) {
        return 'Low'
      } else if ( priority > 3 && priority < 7 ){
        return 'Moderate'
      } else if ( priority > 6 ) {
        return 'High'
      } else {
        return '-'
      }
    }

  return (
    <Table 
      aria-label="basic table" 
      hoverRow 
      stickyHeader
      sx={{ padding: 2 }}
    >
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Priority</TableCell>
          <TableCell>Assigned To</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map(task => {
          return (
          <TableRow key={ task.id }>
            <TableCell>{ task.name }</TableCell>
            <TableCell>{ task.status }</TableCell>
            <TableCell>{ priorityLevel(task.priority) }</TableCell>
            <TableCell>
              <Link href='#' underline='hover'> {/* TODO: Link to User */}
                { users.find(user => user.id === task.assigned_to).name }
              </Link>
            </TableCell>
          </TableRow>
        )})}
      </TableBody>
    </Table>
  )
}

export default Tasks;