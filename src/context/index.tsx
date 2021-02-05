import React from 'react';

import { AuthProvider } from './AuthContext';
import { ModalProvider } from './ModalContext';
import { UserProvider } from './UsersContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </UserProvider>
  </AuthProvider>
);

export default AppProvider;
