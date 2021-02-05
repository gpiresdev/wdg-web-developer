import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { useModal } from '../../context/ModalContext';
import api from '../../services/api';
import { User } from '../Users'
import { Container, Header, FormContainer, TextContainer } from './styles';

const EditUser: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [firstNameInput, setFirstNameInput] = useState<string>('');
  const [lastNameInput, setLastNameInput] = useState<string>('');
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isLoadingApiCall, setIsLoadingApiCall] = useState(false);

  const { handleOpenModal } = useModal();

  const history = useHistory();

  const { id }: any = useParams();

  useEffect(() => {
    let mounted = true;
    function cleanup() {
      mounted = false;
    }

    async function getUser() {
      await api.get(`/users/${id}?delay=2`).then((response) => {
        setUser(response.data.data);
        setIsLoadingPage(false);
      }, (err) => {
      })
    }

    function setUserInput() {
      if (user && mounted) {
        setFirstNameInput(user.first_name);
        setLastNameInput(user.last_name);
      }
    }

    getUser();
    setUserInput();

    return cleanup();
  }, [user, id, history]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoadingApiCall(true);

    const validation = /^[a-zA-Z ]+$/;
    if (firstNameInput.match(validation) && lastNameInput.match(validation)) {
      try {
        await api.put(`users/${id}?delay=2`, { first_name: firstNameInput, last_name: lastNameInput });
        setIsLoadingApiCall(false);
        handleOpenModal({
          variant: 'success',
          title: 'Success!',
          message: 'User data changed succesfully.',
        });

        window.history.back();
      } catch (error) {
        setIsLoadingApiCall(false);
        handleOpenModal({
          variant: 'error',
          title: 'Error',
          message: 'An error has occurred, try again later.',
        });
      }
    } else {
      setIsLoadingApiCall(false);
      handleOpenModal({
        variant: 'error',
        title: 'Error',
        message: 'Invalid characters.',
      });
    }
  }, [firstNameInput, lastNameInput, id, handleOpenModal]);

  return (
    <Container>
      <Header>
        <button onClick={() => window.history.back()} type="button">
          <AiOutlineArrowLeft color="white" size={35} />
        </button>
      </Header>
      <TextContainer>
        {isLoadingPage ? <h1>Loading...</h1> : <h1>User edit</h1>}
      </TextContainer>
      {isLoadingPage ? null
        : <FormContainer>
          <div className="img-container">
            <img alt={user?.first_name} src={user?.avatar} />
          </div>
          <form method="put" onSubmit={handleSubmit}>
            <Input
              defaultValue={user?.first_name}
              name="firstName"
              onChange={(e) => setFirstNameInput(e.target.value)}
              type="text"
            />
            <Input
              defaultValue={user?.last_name}
              name="lastName"
              onChange={(e) => setLastNameInput(e.target.value)}
              type="text"
            />
            <Button loading={isLoadingApiCall} type="submit">
              SET CHANGES
            </Button>
          </form>
        </FormContainer>
      }
    </Container>
  );
};

export default EditUser;
