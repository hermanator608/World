import React from 'react';
import Styled, { createGlobalStyle } from 'styled-components';

import { WEBGL } from './utils/webgl';
import Renderer from './renderer';
import WebGLError from './components/WebGLError';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Header = Styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  padding: 0.25em;

  a {
    color: #09d3ac;
  }
`;


const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header>
        <a
          href="https://github.com/hermanator608"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brandon Herman
        </a>
      </Header>
      <div>
        {
          WEBGL.isWebGLAvailable()
            ? <Renderer />
            : <WebGLError error={WEBGL.getWebGLErrorMessage()} />
        }
      </div>
    </div>
  );
}

export default App;
