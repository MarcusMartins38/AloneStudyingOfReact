import React from 'react';

import { Container } from './styles';

const Input = ({ icon: Icon, ...props }) => {
  return (
    <Container>
      <Icon />
      <input {...props} />
    </Container>
  );
};

export default Input;
