import React from 'react';

import { AuthProvider } from './AuthContext';
import { ModalProvider } from './ModalContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ModalProvider>
      {children}
    </ModalProvider>
  </AuthProvider>
);

export default AppProvider;
