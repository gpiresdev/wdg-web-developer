import { HTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  visible: boolean;
}

export const Container = styled.div<ModalProps>`
  ${(props) => (props.visible ? css`display: flex;` : css`display: none;`)}
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 250px;
  height: 250px;
  margin-left: -135px;
  left: 50%;
  margin-top: -135px;
  top: 50%;
  background: white;
  z-index: 100;
  border-radius: 15px;
  padding: 10px 10px;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-left: -150px;
    margin-top: -150px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  button {
    margin-left: auto;
    background: none;
    outline: none;
    border: none;
  }

  button:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65%;
`;

export const ModalTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 18px;
`;

export const ModalMessage = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    background: none;
    border: none;
    outline: none;
  }

  .close {
    color: white;
    background: red;
    padding: 10px;
    border: none;
    border-radius: 15px;
  }
`;
