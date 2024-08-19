import React from 'react';
import './show-page.css';
import { Box, Paper, Typography } from '@mui/material';
import NavBarComponent from '../../components/NavBarComponent/navbar-component';

const ShowPage = () => {
  return <Box className='showpage'>
    <NavBarComponent />

    <Box className='showpage-content'>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          🚧 Página em Desenvolvimento 🚧
        </Typography>
        <Typography variant="body1">
          Esta página está atualmente em desenvolvimento. Por favor, volte mais tarde. (19/08/24)
        </Typography>
      </Paper>
    </Box>
  </Box>
}


export default ShowPage;