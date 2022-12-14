import React from 'react';
import TextField from '@mui/material/TextField';

// import { Container } from './styles';

const SignUp = () => (
  <div className="sign-up">
    <div className="name-input">
      <TextField id="nome" label="Nome" variant="outlined" color="success" />
    </div>
    <div className="email-input">
      <TextField id="email" label="Email" variant="outlined" className="email-text" color="success" />
    </div>
  </div>
);

export default SignUp;
