import React, { useState, useContext, createContext, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import api from '../services/api';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IPagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

interface IUserContext {
  users: User[];
  paginationData: IPagination;
  isLoading: boolean;
  loadUsers(): Promise<void>;
  filterUsers(id: number): void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [paginationData, setPaginationData] = useState<IPagination>({} as IPagination);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const history = useHistory();

  const totalPages = paginationData?.total_pages;

  const loadUsers = useCallback(async () => {
    setIsLoading(true);
    if (totalPages && Number(location.search.replace('?page=', '')) > totalPages) {
      setIsLoading(false);
      history.push('/not-found')
    } else if (location.search) {
      const response = await api.get(`users${location.search}?delay=2`);
      setUsers(response.data.data);
      setPaginationData({
        per_page: response.data.per_page,
        page: response.data.page,
        total: response.data.total,
        total_pages: response.data.total_pages
      });
      setIsLoading(false);
    } else {
      const response = await api.get('users?delay=2');
      setUsers(response.data.data);
      setPaginationData({
        per_page: response.data.per_page,
        page: response.data.page,
        total: response.data.total,
        total_pages: response.data.total_pages
      });
      setIsLoading(false);
    }
  }, [history, location, totalPages]);

  const filterUsers = useCallback((id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  }, [users]);

  return (
    <UserContext.Provider value={{ users, paginationData, isLoading, loadUsers, filterUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUsers(): IUserContext {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUsers must be used within an UserProvider');
  }

  return context;
}
