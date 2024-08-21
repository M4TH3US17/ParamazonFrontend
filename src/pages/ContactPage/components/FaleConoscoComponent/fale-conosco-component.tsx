import React from 'react';
import './fale-conosco-component.css';
import { Box, Button, TextField, Typography } from '@mui/material';

function FaleConoscoComponent() {
  return (
    <Box className='faleconosco'>

      <Box className='faleconosco-text'>
        <Typography className='faleconosco-text-title'> Fale Conosco </Typography>
        <Typography className='faleconosco-text-subtitle'> Se tiver dúvidas ou precisar de assistência, entre em contato conosco. Estamos aqui para ajudar! </Typography>
      </Box>

      <TextField
        required
        id="outlined-required"
        label="Qual seu nome?"
        defaultValue="Hello World"
      />

      <TextField
        required
        id="outlined-required"
        label="Qual seu telefone?"
        defaultValue="Hello World"
      />

      <TextField
        required
        id="outlined-required"
        label="Qual seu email?"
        defaultValue="Hello World"
      />

      <TextField
        label="Como podemos te ajudar?"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
      />

      <Box component='div' className='faleconosco-btn-section' sx={{ marginTop: '15px', display: 'flex', justifyContent: 'right' }}>
        <Button variant="contained" className='btn' color="success" sx={{ width: '170px', height: '40px' }}> ENVIAR </Button>
      </Box>

    </Box>
  );
}

export default FaleConoscoComponent;