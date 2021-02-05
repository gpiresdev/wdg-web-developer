import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items:center;

  position: relative;

  width: 100%;
  height: 100%;

  background: rgb(64,87,123);
  background: linear-gradient(90deg, rgba(64,87,123,1) 0%, rgba(113,141,168,1) 100%);
`;

export const Waves = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(200% + 1.3px);
    height: 150px;
    transform: rotateY(180deg);
  }

  .shape-fill {
    fill: #ffffff;
  }

  @media screen and (min-width: 768px) {
    svg {
      position: relative;
      display: block;
      width: calc(140% + 1.3px);
      height: 150px;
      transform: rotateY(180deg);
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;

  justify-content: center;

  width: 100%;
  z-index: 100;
`;

export const Form = styled.form`
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }

  @media screen and (min-width: 1920px) {
    width: 30%;
  }
`;
