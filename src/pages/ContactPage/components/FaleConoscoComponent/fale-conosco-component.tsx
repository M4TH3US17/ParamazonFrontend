import React from 'react';
import './fale-conosco-component.scss';
import { Box, Button, TextField, Typography } from '@mui/material';

function FaleConoscoComponent() {
  return (
    <Box className='faleconosco'>
      <Box className='faleconosco-form'>

        <Box className='faleconosco-form-text'>
          <Typography className='faleconosco-form-title'> Fale Conosco </Typography>
          <Typography className='faleconosco-form-subtitle'> Estamos felizes em responder a qualquer dúvida que você possa ter e ajudar a determinar qual dos nossos serviços melhor atende às suas necessidades. </Typography>
        </Box>

        <div className="work-area">
          <h5 className="box-title mb-30 text-white">Como nos Trabalhamos?</h5>
          <div className="work-item_wrapper">
            <div className="work-item">
              <span className="work-item_number">01</span>
              <p className="work-text">Descricao Descricao Descricao</p>
            </div>
            <div className="work-item">
              <span className="work-item_number">02</span>
              <p className="work-text">Descricao Descricao Descricao</p>
            </div>
            <div className="work-item">
              <span className="work-item_number">03</span>
              <p className="work-text">Descricao Descricao Descricao</p>
            </div>
          </div>
        </div>

        <Box className='faleconosco-form-field'>

          <Box className='faleconosco-form-desc'>
            <Typography className='form-description'> Preencha as informações abaixo </Typography>
          </Box>

          <Box className='faleconosco-form-field-container'>
            <TextField
              required
              id="outlined-required"
              label="Qual seu nome?"
              className='faleconosco-form-field-item'
            />

            <TextField
              required
              id="outlined-required"
              label="Qual seu telefone?"
              className='faleconosco-form-field-item'
            />

            <TextField
              required
              id="outlined-required"
              label="Qual seu email?"
              className='faleconosco-form-field-item'
            />

            <TextField
              label="Como podemos te ajudar?"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              className='faleconosco-form-field-item'
            />

            <Box component='div' className='faleconosco-form-button-container'>
              <Button variant="contained" className='faleconosco-form-button'> ENVIAR MENSAGEM </Button>
            </Box>
          </Box>
        </Box>

      </Box>

    </Box>
  );
}

export default FaleConoscoComponent;