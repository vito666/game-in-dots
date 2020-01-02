import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AI, HUMAN, EMPTY, CURRENT, DISABLED, CELL_COLORS } from './CONSTANTS.jsx';
import './Cell.scss';

const getBackgroundColorByCellState = cellState => {
  return CELL_COLORS[cellState];
};

const Cell = props => {
  const { delay = null } = props;
  const [ waiting, setWaiting ] = useState(delay);

  useEffect(() => {
    delay &&
      setTimeout(() => {
        setWaiting(false);
        //props.lastTurn('AI');
      }, delay);
  }, [props.delay]);

  const handleClick = () => {
    console.log(waiting);
    if (waiting) {
      return props.lastTurn('Man');
    } else {
      return null;
    }
  };

  return (
    <>
      <CellWrapper className={props.className}
        { ...props.cellState === DISABLED ? {onClick: (e) => props.errMsg()} : {onClick: (e) => handleClick()}}
        background={getBackgroundColorByCellState(props.cellState)}
      ></CellWrapper>
    </>
  );
};

const CellWrapper = styled.div`
  padding: 25px;
  font-size: 10px;
  border: 1px solid green;
  background: ${props => props.background};
`;

export default Cell;
