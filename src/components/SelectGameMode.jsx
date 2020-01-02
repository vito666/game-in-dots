import React, { useEffect } from 'react';

const SelectGameMode = props => {
  useEffect(() => {
    props.setDifficult(props.currentLevelName);
  }, []);

  return (
    <select onChange={e => props.setDifficult(e.target.value)}>
      <option disabled>Choose level</option>
      {Object.keys(props.gameSettings).map((el, i) => {
        return (
          <option key={i} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default SelectGameMode;
