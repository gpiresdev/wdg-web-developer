import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  height: 100%;

  overflow: auto;

  background: rgb(68,63,144);
  background: linear-gradient(120deg, rgba(68,63,144,1) 0%, rgba(4,7,29,1) 100%);

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
  }

  .shape-fill {
    fill: #0A061F;
  }
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

  button:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }

  .page-button {
    svg {
      color: #595cff;
    }

    &:disabled {
      svg {
        color: #3e3535;
      }
    }
  }

`;

export const CardsContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10px;

  justify-content: center;

  height: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2,0.4fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3,1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  .img-container {
    position: relative;

    &::after {
      content: "";
      border-radius: 15px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(0,0,0);
      background: linear-gradient(4deg, rgba(0,0,0,0.90) 26%, rgba(4,7,29,0) 90%);
      opacity: 1;
      z-index: 5;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }
`;

export const Avatar = styled.img`
  height: 200px;
  width: 250px;
  border-radius: 15px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    height: 250px;
    width: 200px;
  }

  @media screen and (min-width: 1024px) {
    height: 300px;
    width: 300px;
  }
`;

export const ButtonContainer = styled.div`
  background: none;
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 100;

  button {
    transform: scale(1);
    transition: 0.3s ease-out;
    border: none;
    background: none;
    outline: none;

    &:hover {
      transform: scale(1.2);
      transition: 0.3s ease-in;
    }
  }
`;

export const EditMenu = styled.div`
  position: absolute;
  bottom: 45%;
  background: white;
  z-index: 6;
  left: calc(50% - 144px);
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    left: calc(46% - 20px);
    top: calc(-120% + 30px);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid white;
    z-index: 6;
  }

  button {
    transform: scale(1);
    transition: 0.3s ease-out;
    border: none;
    background: none;
    outline: none;
    z-index: 100;
  }

  @media screen and (min-width: 768px) {
    bottom: 51%;
    background: white;
    z-index: 6;
    left: calc(63% - 144px);
  }

  @media screen and (min-width: 1024px) {
    left: calc(42% - 144px);
    bottom: 58%;
  }

`;

export const Text = styled.div`
    position: absolute;
    top: 66%;
    left: 5%;
    z-index: 100;
    width: 90%;

  h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 25px;
    color: white;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #868585;
  }

  p + p {
    margin-top: 5px;
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    top: 69%;
  }

  @media screen and (max-width: 1024px) {
    top: 69%;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem 0 auto;
  z-index: 100;

  span {
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: white;
  }
`;
