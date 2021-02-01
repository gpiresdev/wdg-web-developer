import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items:center;

  position: relative;

  width: 100%;
  height: 100%;

  background: rgb(26,37,128);
  background: radial-gradient(circle, rgba(26,37,128,1) 0%, rgba(2,0,32,0.9472163865546218) 100%);
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
    fill: #0A0041;
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
