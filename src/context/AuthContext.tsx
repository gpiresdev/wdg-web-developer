import React, {
  createContext, useCallback, useContext, useState
} from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInData): Promise<void>;
  signOut(): void;
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@app:token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login?delay=2', {
      email,
      password,
    });
    const { token } = response.data;

    localStorage.setItem('@app:token', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@app:token');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
