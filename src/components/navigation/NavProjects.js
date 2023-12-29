import React from 'react'
import { constProjects } from './consts/constProjects';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ListItem from '@mui/joy/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/joy/ListItemButton';

export default function NavSelection() {
  return (
    <>
      {constProjects.map(item => (
        <ListItem key={ item.id }>
          <ListItemButton> {/* TODO: Link to Project */}
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText primary={ item.label }/>
          </ListItemButton>
        </ListItem>
      ))}
    </>
  )
}
