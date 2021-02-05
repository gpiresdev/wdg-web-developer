import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background: rgb(39,76,119);
  background: linear-gradient(52deg, rgba(39,76,119,1) 0%, rgba(3,61,119,1) 100%);
`;

export const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0; right:0; left: 0;
  z-index: 50;
  padding: 0.5em 0;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(6,3,26,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(6,3,26,1);
  box-shadow: 0px 0px 5px 0px rgba(6,3,26,1);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(120deg, rgba(0,0,0,0.6) 0%, rgba(4,7,29,0) 100%);
    opacity: .7;
  }

  button {
    background: none;
    cursor: pointer;
    outline: none;
    border: none;
    margin-left: 1rem;
    z-index: 100;
  }
`;

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-container {
    margin-bottom: 2em;
    img {
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    form {
      width: 70%;
    }
  }

  @media screen and (min-width: 1024px) {
    form {
      width: 40%;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2em;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    color: white;
  }
`;
