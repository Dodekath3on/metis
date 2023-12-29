import React, { useEffect, useState } from 'react'
import Table from '@mui/joy/Table';
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

  return (
    <Table 
      aria-label="basic table" 
      hoverRow 
      stickyHeader
      sx={{ padding: 2 }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: 'center' }}>Name</th>
          <th style={{ textAlign: 'center' }}>Status</th>
          <th style={{ textAlign: 'center' }}>Priority</th>
          <th style={{ textAlign: 'center' }}>Assigned To</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => {
          return (
          <tr key={ task.id }>
            <td>{ task.name }</td>
            <td>{ task.status }</td>
            <td>{ task.priority }</td>
            <td>
              <Link href='#' underline='hover'>
                { users.find(user => user.id === task.assigned_to).name }
              </Link>
            </td>
          </tr>
        )})}
      </tbody>
    </Table>
  )
}

export default Tasks;