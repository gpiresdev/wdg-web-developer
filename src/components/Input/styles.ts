import styled from 'styled-components';

export const Container = styled.div`
  color: #666360;
  background: #0f0e23;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: auto;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent !important;
    border: 0;
    color: #f4ede8;
    outline: none;

    &::placeholder {
      color: #666360;
    }
  }

  input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 40px #0f0e23 inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: white !important;
  }

  svg {
    color: #D4DFED;
    margin-right: 16px;
  }
`;
