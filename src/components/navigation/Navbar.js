import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/joy/Divider';
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'

import List from '@mui/joy/List';

import NavSelection from './NavSelection';
import NavProjects from './NavProjects';

export default function DrawerCloseButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex' }}>
            <Button variant="simple" color="neutral" onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: 'white'}}/>
            </Button>
            <Drawer open={ open } onClose={() => setOpen(false)}>
              <ModalClose />
              <br/>
              <List>
                <NavSelection />
                <Divider />
                <NavProjects />
              </List>
            </Drawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            METIS
          </Typography>
          <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
            <IconButton>
              <Avatar alt="Avatar" src="" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>




  );
}