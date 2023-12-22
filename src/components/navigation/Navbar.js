import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/joy/Divider';

import List from '@mui/joy/List';

import NavSelection from './NavSelection';
import NavProjects from './NavProjects';

export default function DrawerCloseButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Button variant="simple" color="neutral" onClick={() => setOpen(true)}>
        <MenuIcon />
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
  );
}