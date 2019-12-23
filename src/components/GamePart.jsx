import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GameBoard from './GameBoard';
import SelectOption from './SelectOption';
import superagent from 'superagent';

const GamePart = () => {
  const [gameSettings, setSettings] = useState({});
  // current mode usestate
  const [currentLevel, setLevel] = useState({});

  const setDifficult = props => {
    //console.log(currentLevel);
    if (props === 'easyMode') {
      setLevel(gameSettings.easyMode);
    } else if (props === 'normalMode') {
      setLevel(gameSettings.normalMode);
    } else {
      setLevel(gameSettings.hardMode);
    }
  };

  const getData = async () => {
    try {
      const res = await superagent.get(
        `https://starnavi-frontend-test-task.herokuapp.com/game-settings`
      );
      return res.text;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    const initSettings = async () => {
      const res = await getData();
      setSettings(JSON.parse(res));
    };
    initSettings();
  }, []);

  // useEffect(() => {
  //   console.log(gameSettings);
  // }, [gameSettings]);

  return (
    <ContentWrapper>
      <GameSettings>
        <SelectOption setDifficult={setDifficult} gameSettings={gameSettings} />
        <input placeholder='Enter your name' type='text' />
        <button>Play</button>
      </GameSettings>
      <GameMessage>qweqweqweqwe</GameMessage>
      <GameBoard currentLevel={currentLevel} />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
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

export default GamePart;
