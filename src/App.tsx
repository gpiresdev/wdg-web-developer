import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Modal from './components/Modal';
import AppProvider from './context';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <Modal />
        <GlobalStyle />
      </AppProvider>
    </BrowserRouter>
  </>
)
export default App;
