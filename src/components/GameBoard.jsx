import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CellWrapper from './Cell';

const GameBoard = props => {
  const [currCell, setCurrCell] = useState();
  const [settingsToArr, setSettings] = useState();
  const [arrCells, setArrCell] = useState();
  console.log(props, 'Props in GameBoard');
  //const settingsToArr = Object.values(props.currentLevel);
  console.log(settingsToArr, 'SettingsToArr');
  const Human = [];
  const AI = [];

  // const arrCells =
  //   ;

  //console.log(arrCells);

  const getRandomFreeCell = () => {
    //(&& arrCells[0].cellState === null)
    console.log(arrCells);
    if (
      !Object.keys(props.currentLevel).length === false &&
      arrCells.cellState !== null
      // loop dies when used all numbers
    ) {
      let num = Math.floor(Math.random() * settingsToArr[0] ** 2);
      console.log(num, 'random Number');
      if (arrCells[num].cellState == null) {
        Human.push({ [num]: false });
        AI.push({ [num]: false });
        console.log(AI, Human, 'AI array and Human array');
        arrCells[num].cellState = 'taken';
        return num;
      } else {
        getRandomFreeCell();
      }
    } else {
      return null;
    }

    // if (
    //   !Object.keys(props.currentLevel).length === false &&
    //   arrCells[0].cellState === null
    // ) {
    //   let num = -1;
    //   while (arrCells[0].cellState !== null) {
    //     num = Math.floor(Math.random() * settingsToArr[0] ** 2);
    //   }
    //   return console.log(num) || num;
    // } else {
    //   return console.log('else') || null;
    // }
  };

  const lastTurn = whosTurn => {
    arrCells[currCell].cellState = whosTurn;
    console.log('lastturn');
    setInterval(() => getRandomFreeCell(), 5000);
  };
  //const newCurrCell = setRandomFreeCell(arrCells);

  const getBackgroundColorByCellState = state => {
    // console.log(state);
    if (state === null) {
      return 'white';
    } else if (state === 'AI') {
      return 'red';
    } else if (state === 'Human') {
      return 'green';
    } else if (state === 'current') {
      return 'yellow';
    }
  };

  const createInitArr = foo => {
    return Array(foo ** 2)
      .fill({})
      .map((el, i) => ({
        id: i,
        color: '#fff',
        cellState: currCell === i ? 'current' : null
      }));
  };

  useEffect(() => {
    settingsToArr && console.log(settingsToArr[0]);
    settingsToArr && settingsToArr[0] && setArrCell(createInitArr(5));
    settingsToArr && arrCells && setCurrCell(getRandomFreeCell());
    console.log(arrCells);
  }, [settingsToArr]);

  useEffect(() => {
    props.currentLevel && setSettings(Object.values(props.currentLevel));
  }, [props.currentLevel]);

  return (
    <SquareWrapper>
      {arrCells &&
        arrCells.map((item, index) => {
          return (
            <CellWrapper
              delay={currCell === index ? settingsToArr[1] : null}
              lastTurn={currCell === index ? lastTurn : null}
              cellState={item.cellState}
              key={index}
              background={getBackgroundColorByCellState(item.cellState)}
            >
              {index + 1}
            </CellWrapper>
          );
        })}
    </SquareWrapper>
  );
};

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

// const CellWrapper = styled.div`
// padding: 25px;
//   font-size: 10px;
//   border: 1px solid green;
//   background: ${props => props.background};
// `
export default GameBoard;
