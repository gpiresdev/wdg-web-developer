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

  const history = useHistory();
  const { handleOpenModal } = useModal();

  const { id }: any = useParams();

  useEffect(() => {
    let mounted = true;
    async function loadSingleUser() {
      const response = await api.get(`/users/${id}?delay=2`);
      if (mounted) {
        setUser(response.data.data);
        setIsLoadingPage(false);
      }
    }
    loadSingleUser();
    if (user) {
      setFirstNameInput(user.first_name);
      setLastNameInput(user.last_name);
    }

    return function cleanup() {
      mounted = false;
    }
  }, [user, id]);

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

        history.goBack();
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
  }, [firstNameInput, lastNameInput, id, history, handleOpenModal]);

  return (
    <Container>
      <Header>
        <button onClick={() => history.goBack()} type="button">
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
