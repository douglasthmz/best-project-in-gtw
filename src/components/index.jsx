import React, { useEffect, useState } from 'react';
import {
  Button,
  // Form,
} from 'antd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useWidgetContext } from './context';

import SignUp from './steps/SignUp';
import SignUp2 from './steps/SignUp2';
import Integration from './steps/Integration';
import Welcome from './steps/Welcome';
import GoodBye from './steps/GoodBye';
import Safety from './steps/Safety';

import welcome from '../assets/welcome.svg';
import name from '../assets/name-email.svg';
import cpf from '../assets/cnpj-cpf.svg';
import safety from '../assets/safety.svg';

// const { useForm } = Form;

const Widget = () => {
  // const [form] = useForm();
  const { page, setPage } = useWidgetContext();
  const [background, setBackground] = useState(welcome);
  const [buttonClass, setButtonClass] = useState('welcome');
  const [buttonText, setButtonText] = useState('Solicitar Empréstimo');

  const handleBackButton = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleNextButton = async () => {
    if (page === 6) return;
    setPage(page + 1);
  };

  const handleContent = (page) => {
    switch (page) {
      case 1:
        return (
          <Welcome />
        );
      case 2:
        return (
          <SignUp />
        );
      case 3:
        return (
          <SignUp2 />
        );
      case 4:
        return (
          <Safety />
        );
      case 5:
        return (
          <Integration />
        );
      case 6:
        return (
          <GoodBye />
        );
      default:
        return false;
    }
  };

  useEffect(() => {
    switch (page) {
      case 1:
        setBackground(welcome);
        setButtonClass('welcome');
        setButtonText('Solicitar Empréstimo');
        break;
      case 2:
        setBackground(name);
        setButtonClass('name');
        setButtonText(<ArrowForwardIcon />);
        break;
      case 3:
        setBackground(cpf);
        setButtonClass('name');
        setButtonText(<ArrowForwardIcon />);
        break;
      case 4:
        setBackground(safety);
        setButtonClass('safety');
        setButtonText('Comprove seu faturamento');
        break;
      default:
        setBackground(welcome);
        setButtonClass('welcome');
        break;
    }
  }, [page]);

  return (
    <div className="welcome-container" style={{ backgroundImage: `url(${background})` }}>
      {handleContent(page)}
      <Button
        type="secondary"
        className={`back-button ${buttonClass && `back-${buttonClass}`}`}
        // disabled={loading}
        onClick={handleBackButton}
      >
        <ArrowBackIcon /> Voltar
      </Button>
      <Button
        type="primary"
        className={`next-button ${buttonClass}`}
        // loading={loading}
        onClick={handleNextButton}
      >

        {buttonText}
      </Button>
    </div>
  );
};

export default Widget;
