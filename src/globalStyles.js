import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
  }
  
  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .share {
    position: relative;
    line-height: 32px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .share::after {
    content: url('./images/link-line.svg');
    position: absolute;
    top: 15px;
    left: -10px;
    display: block;
  }

`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;
