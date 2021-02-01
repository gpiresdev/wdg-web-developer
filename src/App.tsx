import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Modal from './components/Modal';
import AppProvider from './context';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Router>
      <AppProvider>
        <Routes />
        <Modal />
        <GlobalStyle />
      </AppProvider>
    </Router>
  </>
)

export default App;
