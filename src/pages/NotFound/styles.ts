import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: rgb(3,61,119);
  background: linear-gradient(52deg, rgba(3,61,119,1) 0%, rgba(96,150,186,1) 100%);
`;

export const ErrorTitle = styled.h1`
  font-size: 3em;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: rgb(167, 0, 0);
`;

export const ErrorText = styled.p`
  margin-top: 1em;
  font-size: 1.8em;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: white;
`;
