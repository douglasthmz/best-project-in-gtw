import React from 'react';
import TextField from '@mui/material/TextField';

// import { Container } from './styles';

const SignUp = () => (
  <div className="sign-up">
    <div className="name-input">
      <TextField id="cpf" label="CPF" variant="outlined" color="success" />
    </div>
    <div className="email-input">
      <TextField id="cnpj" label="CNPJ" variant="outlined" className="email-text" color="success" />
    </div>
  </div>
);

export default SignUp;
