import React, { useCallback } from 'react';
import { AiFillCheckSquare, AiFillCloseSquare } from 'react-icons/ai';
import { BiError, BiCheckCircle, BiQuestionMark } from 'react-icons/bi';

import { useModal } from '../../context/ModalContext';
import { useUsers } from '../../context/UsersContext';
import api from '../../services/api';
import { Container, ModalHeader, ModalBody, ModalTitle, ModalMessage, ModalButtonContainer } from './styles';

const Modal: React.FC = () => {
  const { visible, modalProps, handleCloseModal, handleOpenModal } = useModal();
  const { filterUsers } = useUsers();

  const handleConfirmSelection = useCallback(async () => {
    try {
      await api.delete(`users/${modalProps.id}`);
      handleOpenModal({
        message: 'User has been deleted.',
        title: 'Success',
        variant: 'success',
      });
      if (modalProps.id) {
        filterUsers(modalProps.id);
      }
    } catch (error) {
      handleOpenModal({
        message: 'An error has occurred, try again later.',
        title: 'Error',
        variant: 'error',
      });
    }
  }, [modalProps, handleOpenModal, filterUsers]);

  return (
    <Container visible={visible}>
      <ModalHeader>
        <ModalTitle>{modalProps.title}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        {modalProps.variant === 'success'
          ? <BiCheckCircle color="green" size={70} />
          : modalProps.variant === 'error'
            ? <BiError color="yellow" size={70} />
            : <BiQuestionMark color="blue" size={70} />}
        <ModalMessage>{modalProps.message}</ModalMessage>
      </ModalBody>
      {modalProps.variant === 'confirmation'
        ? <ModalButtonContainer>
          <button type="button">
            <AiFillCheckSquare color="green" onClick={handleConfirmSelection} size={40} />
          </button>
          <button type="button">
            <AiFillCloseSquare color="red" onClick={handleCloseModal} size={40} />
          </button>
        </ModalButtonContainer>
        : <ModalButtonContainer>
          <button className="close" onClick={handleCloseModal} type="button">
            CLOSE
          </button>
        </ModalButtonContainer>
      }
    </Container>
  );
}

export default Modal;
