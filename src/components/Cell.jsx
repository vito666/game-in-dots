import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cell = props => {
  const { delay = null } = props;
  //console.log(props);
  const [cellColor, setColor] = useState('#fff');
  const [waiting, setWaiting] = useState(delay);

  useEffect(() => {
    delay &&
      setTimeout(() => {
        setWaiting(false);
        props.lastTurn('AI');
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
      <CellWrapper
        {...(props.cellState === 'current' ? { onClick: handleClick } : {})}
        background={cellColor}
        {...(props.cellState === 'current'
          ? { background: 'pink' }
          : { background: 'yellow' })}
        // background={cellColor}
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
