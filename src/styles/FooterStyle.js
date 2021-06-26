import styled from 'styled-components';

export const FooterSection = styled.footer`
  background: rgba(37, 32, 29, 1);
  color: #fff;
  padding: 5rem 0;

  img {
    width: 100%;
    max-width: 454px;
  }

  form div {
    display: flex;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    padding: 5px;

    input {
      background: transparent;
      border: none;
      margin-left: 1rem;
      width: 100%;
    }

    button {
      background: #ffffff;
      box-shadow: 1px 4px 8px rgba(239, 88, 3, 0.2);
      border-radius: 4px;
      color: #000;
      padding: 1rem;
      border: none;
    }
  }
`;
