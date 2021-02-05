import React, { useState, useContext, createContext, useCallback } from 'react';

export interface ModalProps {
  title: string;
  message: string;
  variant: 'success' | 'error' | 'confirmation';
  id?: number;
}

interface ModalContextProps {
  modalProps: ModalProps;
  visible: boolean;
  handleOpenModal(data: ModalProps): void;
  handleCloseModal(): void;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalProps, setModalProps] = useState<ModalProps>({} as ModalProps);
  const [visible, setVisible] = useState(false);

  const handleOpenModal = useCallback((data: ModalProps) => {
    setModalProps(data);
    setVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setVisible(false);
    setModalProps({} as ModalProps);
  }, []);

  return (
    <ModalContext.Provider value={
      { handleOpenModal, handleCloseModal, visible, modalProps }
    }>
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextProps {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within an ModalProvider');
  }

  return context;
}
