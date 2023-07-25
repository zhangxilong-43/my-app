import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw from "twin.macro";
import { HomePage } from './app/container/HomePage';
import styled from 'styled-components';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;
function App() {
  return (
    <AppContainer>
      <HomePage/>
    </AppContainer>
  );
}

export default App;
