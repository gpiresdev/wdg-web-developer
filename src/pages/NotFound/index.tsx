import React from 'react';
import { VscError } from 'react-icons/vsc';

import { Container, ErrorText, ErrorTitle } from './styles';

const NotFound: React.FC = () => (
  <Container>
    <div className="icon">
      <VscError color="red" size={100} />
    </div>
    <div className="text">
      <ErrorTitle>Error 404</ErrorTitle>
      <ErrorText>Page not found.</ErrorText>
    </div>
  </Container>
);

export default NotFound;
