import React, { Component } from 'react';
import { AI, HUMAN, EMPTY, CURRENT, DISABLED } from './CONSTANTS.jsx';
import styled from 'styled-components';
import Cell from './Cell.jsx';

const getRandomFreeCell = arrBoard => {
  const arrEmptyCells = arrBoard.reduce((acc, cur, i) => {
    cur.cellState === EMPTY && acc.push(i);
    return acc;
  }, []);

  if (arrEmptyCells.length) {
    return Math.round(Math.random() * arrEmptyCells.length);
  } else {
    return null;
  }
};

const createInitArr = size => {
  if (size) {
    return Array(size ** 2)
      .fill({})
      .map((el, i) => ({
        id: i,
        color: '#fff',
        cellState: EMPTY
      }));
  } else {
    return [];
  }
};

class GameBoard extends Component {
  state = {
    curCell: null,
    arrBoard: [],
    currentLevelSettings: {},
    isGameStartred: false
  };

  changeCellStateTo = (n, newState) => {
    const reducedArrBoard = { ...this.state.arrBoard[n], cellState: newState };
    return this.setState({ arrBoard: reducedArrBoard });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.currentLevelSettings.field !==
        prevState.currentLevelSettings.field ||
      nextProps.currentLevelSettings.isGameStartred !==
        prevState.currentLevelSettings.isGameStartred
    ) {
      const arrBoard = createInitArr(nextProps.currentLevelSettings.field);
      const curCell = getRandomFreeCell(arrBoard);
      arrBoard[curCell] = { ...arrBoard[curCell], cellState: CURRENT };
      return {
        arrBoard: arrBoard,
        curCell: curCell,
        currentLevelSettings: nextProps.currentLevelSettings,
        isGameStartred: nextProps.isGameStartred
      };
    } else {
      return null;
    }
  }

  componentDidMount = () => {
    this.setState({ currentLevelSettings: this.props.currentLevelSettings });
    //!! опять-таки.... если ты попытаешься вывести здесь this.state.currentLevelSettings - ничего не увидешь, а в рендере стейт уже будет нормальный
  };

  render() {
    const {
      arrBoard,
      curCell,
      currentLevelSettings,
      isGameStartred
    } = this.state;

    return (
      <>
        {arrBoard &&
          curCell &&
          arrBoard.map((el, i) => {
            return (
              <div key={i}>
                {!isGameStartred ? (
                  <Cell errMsg={this.props.errMsg} cellState={DISABLED}></Cell>
                ) : (
                  <Cell
                    className={`cell-${el.cellState}`}
                    {...(curCell === i
                      ? { delay: currentLevelSettings.delay }
                      : {})}
                    cellTakedBy={this.changeCellStateTo}
                    cellState={el.cellState}
                  >
                    {i + 1}
                  </Cell>
                )}
              </div>
            );
          })}
      </>
    );
  }
}

export default GameBoard;
