import React, { useEffect } from 'react';

const SelectOption = props => {
  //console.log(Object.values(props));
  const toObj = Object.keys(props.gameSettings);
  //console.log(toObj);
  //console.log(props.gameSettings);

  useEffect(() => {
    props.setDifficult('easyMode');
  }, []);

  return (
    <>
      <select onChange={e => props.setDifficult(e.target.value)}>
        <option disabled>Choose level</option>
        <option></option>
        {toObj.map((el, i) => {
          return (
            <option key={i} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectOption;
