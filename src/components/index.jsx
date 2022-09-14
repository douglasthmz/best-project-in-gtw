import React from 'react';
import {
  Button,
  // Form,
} from 'antd';
import { useWidgetContext } from './context';

import SignUp from './steps/SignUp';
import Integration from './steps/Integration';
import Welcome from './steps/Welcome';
import GoodBye from './steps/GoodBye';

// const { useForm } = Form;

const Widget = () => {
  // const [form] = useForm();
  const { page, setPage } = useWidgetContext();

  const handleBackButton = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleNextButton = async () => {
    if (page === 4) return;
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
          <Integration />
        );
      case 4:
        return (
          <GoodBye />
        );
      default:
        return false;
    }
  };

  return (
    <>
      <div className="partner-creation-container">
        {handleContent(page)}
      </div>
      <Button
        type="secondary"
        className="partner-creation-modal-back-button"
        // disabled={loading}
        onClick={handleBackButton}
      >
        Voltar
      </Button>
      <Button
        type="primary"
        // loading={loading}
        onClick={handleNextButton}
      >

        Salvar
      </Button>
    </>
  );
};

export default Widget;
