import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: rgb(39,41,57);
  background: radial-gradient(circle, rgba(39,41,57,1) 0%, rgba(0,0,0,0.9472163865546218) 100%);
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
