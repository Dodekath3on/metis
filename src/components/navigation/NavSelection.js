import React from 'react'
import { constItems } from './consts/constItems';
import ListItem from '@mui/joy/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/joy/ListItemButton';

export default function NavSelection() {
  return (
    <>
      {constItems.map(item => (
        <ListItem key={ item.id }>
          <ListItemButton> {/* TODO: Link to Home */}
            <ListItemIcon>
              { item.icon }
            </ListItemIcon>
            <ListItemText primary={ item.label }/>
          </ListItemButton>
        </ListItem>
      ))}
    </>
  )
}
