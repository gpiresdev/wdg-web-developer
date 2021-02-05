
import React, {
  useCallback, useEffect, useState
} from 'react';
import { AiOutlinePoweroff, AiOutlineMore, AiFillEdit, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { useModal } from '../../context/ModalContext';
import { useUsers } from '../../context/UsersContext';
import {
  Container,
  Wave,
  Header,
  CardsContainer,
  Card,
  Avatar,
  ButtonContainer,
  EditMenu,
  Text,
  Pagination
} from './styles';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users: React.FC = () => {
  const [visible, setVisible] = useState<number | undefined>();

  const { isLoading, loadUsers, paginationData, users } = useUsers();

  const history = useHistory();
  const { signOut } = useAuth();
  const { handleOpenModal } = useModal();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleLogout = useCallback(() => {
    signOut();
    history.push('/');
  }, [history, signOut]);

  const handleMenuVisibility = useCallback((id: number) => {
    if (visible === id) {
      setVisible(undefined)
    } else {
      setVisible(id);
    }
  }, [visible]);

  const handleRedirectToUserEdit = useCallback((id: number) => {
    history.push(`users/${id}`);
  }, [history]);

  const handleDeleteConfirmation = useCallback((id: number) => {
    handleOpenModal({
      variant: "confirmation",
      message: "Are you sure you want to delete this user?",
      title: "Confirmation",
      id,
    });
  }, [handleOpenModal]);

  const handleNextPageChange = useCallback(() => {
    if (paginationData && paginationData.page < paginationData?.total_pages) {
      const nextPage = paginationData?.page + 1;
      history.push(`/users?page=${nextPage}`);
    }
  }, [history, paginationData]);

  const handlePrevPageChange = useCallback(() => {
    if (paginationData && paginationData.page !== 1) {
      const prevPage = paginationData?.page - 1;
      history.push(`/users?page=${prevPage}`);
    }
  }, [history, paginationData]);

  return (
    <Container>
      <Wave>
        <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg">
          <path className="shape-fill" d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" />
        </svg>
      </Wave>
      <Header>
        <Pagination>
          {isLoading
            ? <span>Loading...</span>
            : <span>Page {paginationData?.page} of {paginationData?.total_pages}</span>}
          <button className="page-button" disabled={paginationData?.page === 1 ? true : undefined} onClick={handlePrevPageChange}
            type="button">
            <AiOutlineArrowLeft size={35} />
          </button>
          <button className="page-button" disabled={paginationData?.page === paginationData?.total_pages
            ? true : undefined} onClick={handleNextPageChange}
            type="button">
            <AiOutlineArrowRight size={35} />
          </button>
        </Pagination>
        <button className="logout" onClick={handleLogout} type="button">
          <AiOutlinePoweroff color="red" size={35} />
        </button>
      </Header>
      <CardsContainer>
        {users?.map((user) => (
          <Card key={user.id}>
            <div className="img-container">
              <Avatar alt={user.first_name} className="avatar-image" src={user.avatar} />
              <Text>
                <h1 className="lastname">{user.last_name},</h1>
                <p className="firstname">{user.first_name}</p>
                <p className="email">{user.email}</p>
              </Text>
              <ButtonContainer>
                <button onClick={() => handleMenuVisibility(user.id)} type="button">
                  <AiOutlineMore color="red" size={40} />
                </button>
              </ButtonContainer>
              {visible === user.id
                ? <EditMenu>
                  <button onClick={() => handleRedirectToUserEdit(user.id)} type="button">
                    <AiFillEdit color="grey" size={35} />
                  </button>
                  <button onClick={() => handleDeleteConfirmation(user.id)} type="button">
                    <ImBin color="red" size={35} />
                  </button>
                </EditMenu> : null
              }
            </div>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
}

export default Users;
