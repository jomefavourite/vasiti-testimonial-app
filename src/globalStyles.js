import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    ${'' /* min-height: 100%; */}
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

export const Button = styled.button`
  background: ${props => (props.vendor ? '#F0FFEE' : '#EEF8FF')};
  color: ${props => (props.vendor ? '#049A01' : '#0D019A')};
  border: none;
  padding: 0.5rem 1rem;
  margin: ${props => (props.firstReview ? 0 : '1rem 0 2rem')};
`;
