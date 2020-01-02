import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GameBoard from './GameBoard';
import SelectGameMode from './SelectGameMode';
import superagent from 'superagent';
import Spinner from './Spinner.jsx';
import { GAME_SETTINGS_URL } from './CONSTANTS.jsx';

const StartScreen = () => {
  const [gameSettings, setGameSettings] = useState({});
  const [currentLevelSettings, setCurrentLevelSettings] = useState({});
  const [currentLevelName, setCurrentLevelName] = useState(null);
  const [isGameStartred, setIsGameStartred] = useState(false);

  const setDifficult = mode => {
    mode && gameSettings[mode] && setCurrentLevelSettings(gameSettings[mode]);
    setCurrentLevelName(mode);
  };

  const getData = async () => {
    try {
      const res = await superagent.get(GAME_SETTINGS_URL);
      return res.text;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const errMsg = (msg = 'Enter your name and click Play to start the game') => {
    alert(msg);
  };

  const playGame = () => {
    console.log(1111111111);
    if (!isGameStartred) {
      if (!currentLevelSettings.userName) return errMsg();
      setIsGameStartred(true);
    } else {
      setIsGameStartred(false);
    }
  };

  useEffect(() => {
    const initSettings = async () => {
      const res = await getData();
      setGameSettings(JSON.parse(res));
    };
    initSettings();
  }, []);

  useEffect(() => {
    if (gameSettings) {
      setDifficult(Object.keys(gameSettings)[0]);
    }
  }, [gameSettings]);

  return (
    <ContentWrapper>
      {currentLevelSettings ? (
        <>
          <GameSettings>
            <SelectGameMode
              currentLevelName={currentLevelName}
              setDifficult={setDifficult}
              gameSettings={gameSettings}
            />
            <input placeholder='Enter your name' type='text' />
            <button onClick={playGame}>Play</button>
          </GameSettings>
          <GameMessage>Click Play to start the game!</GameMessage>
          <SquareWrapper>
            <GameBoard
              errMsg={errMsg}
              isGameStartred={isGameStartred}
              currentLevelSettings={currentLevelSettings}
            />
          </SquareWrapper>
        </>
      ) : (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
`;

const SpinnerWrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  background: radial-gradient(white, grey);
  align-items: center;
  display: flex;
  justify-content: center;
`;

const GameSettings = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameMessage = styled.p`
  text-align: center;
  font-size: 30px;
  color: #000;
`;

const SquareWrapper = styled.div`
  display: grid;
  /* use styled components props to change border size and grid template, both ows and columns  */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 3fr;
  height: 3fr;
  border: 3px solid black;
  /* div {
    font-size: 5px;
    padding: 0.5em;
    text-align: center;
    border: 1px solid green;
  } */
`;

export default StartScreen;
