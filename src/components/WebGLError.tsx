import React from 'react';

import Styled, { keyframes } from 'styled-components';

interface IWebGLErrorProps {
  error: string;
}

const colorFlash = keyframes`
  0% {
    color: red;
  }

  50% {
    color: black;
  }

  100% {
    color: red;
  }
`;

const ErrorDiv = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  padding: 0.25em;
  animation: ${colorFlash} 2s ease-in-out infinite;
`;

const WebGLError: React.FC<IWebGLErrorProps> = ({ error }) => {
  return (
    <ErrorDiv>
      <strong>
        {error}
      </strong>
    </ErrorDiv>
  );
}

export default WebGLError;
