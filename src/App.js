import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GamePart from './components/GamePart';
import LeaderBoardPart from './components/LeaderBoardPart';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding-top:20px;
    width:100vw;
    height:100vh;  
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <GamePart />
        <LeaderBoardPart />
      </Wrapper>
    </>
  );
}

export default App;
