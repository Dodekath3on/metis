import React, { useEffect, useState } from 'react'
import Table from '@mui/joy/Table';

function Tasks () {
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/task/')
    .then(res => res.json())
    .then(data => {
      console.table(data)
      setTasks(data)
    })
  }, [])

  return (
    <Table 
      aria-label="basic table" 
      hoverRow 
      stickyHeader
    >
      <thead>
        <tr>
          <th style={{ textAlign: 'center' }}>Name</th>
          <th style={{ textAlign: 'center' }}>Status</th>
          <th style={{ textAlign: 'center' }}>Priority&nbsp;(g)</th>
          <th style={{ textAlign: 'center' }}>Assigned To&nbsp;(g)</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => {
          return (
          <tr key={ task.id }>
            <td>{ task.name }</td>
            <td>{ task.status }</td>
            <td>{ task.priority }</td>
            <td>{ task.assigned_to }</td>
          </tr>
        )})}
      </tbody>
    </Table>
  )
}

export default Tasks;