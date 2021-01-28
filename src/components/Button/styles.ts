import styled from 'styled-components';

export const Container = styled.button`
  background: rgb(140,135,215);
  background: linear-gradient(180deg, rgba(140,135,215,1) 0%, rgba(26,37,128,1) 100%);
  height: 56px;
  border-radius: 10px;
  border: 0px;
  padding: 0 16px;
  color: white;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  margin-top: 16px;
  transform: scale(1);
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease-out;
  }
`;

export const Div = styled.div``;
