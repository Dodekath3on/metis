import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import TestImage from '../assets/test_image.jpg'

const UserSignIn = () => {
  return (
    <section className='user-signin'>
      <Grid container spacing={2} >
        <Grid item xs={6} 
        // style={{
        //   border: '1px solid black',
        //   borderRadius: '25px',
        //   padding: '20px',
        //   marginLeft: '25px',
        //   marginRight: '25px'
        // }}
        >
          <Typography variant='h4'>Welcome to Metis</Typography>
          <Typography variant='h6'>To get started, please sign in below:</Typography>
          <br />
          <Button variant='outlined'>Continue with [Some 3rd Party]</Button>
          <br />
          <br />
          <TextField 
            id='user-email'
            label='Email Address'
            type='email'
          />
          <br />
          <br />
          <Button variant='contained'>Continue</Button>
        </Grid>
        <Grid item xs style={{ backgroundColor: 'lightgray' }}>
          <Box 
            component='img'
            sx={{
              height: '100%',
              width: '100%',
              maxHeight: { xs:300, md: 300 },
              maxWidth: { xs: 300, md: 300}
            }}
            alt='test image'
            src={ TestImage }
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default UserSignIn