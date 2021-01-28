import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Router>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </Router>
  </>
);

export default App;
