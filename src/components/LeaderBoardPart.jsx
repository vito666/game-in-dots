import React from 'react';
import styled from 'styled-components';

const LeaderBoardPart = () => {
  return (
    <Wrapper>
      <p>Leader Board</p>
      <WinnerDetails>
        <div>
          <p>UserName</p>
        </div>
        <div>
          <p>Date and Time</p>
        </div>
      </WinnerDetails>
      <WinnerDetails>
        <div>
          <p>UserName</p>
        </div>
        <div>
          <p>Date and Time</p>
        </div>
      </WinnerDetails>
      <WinnerDetails>
        <div>
          <p>UserName</p>
        </div>
        <div>
          <p>Date and Time</p>
        </div>
      </WinnerDetails>
      <WinnerDetails>
        <div>
          <p>UserName</p>
        </div>
        <div>
          <p>Date and Time</p>
        </div>
      </WinnerDetails>
      <WinnerDetails>
        <div>
          <p>UserName</p>
        </div>
        <div>
          <p>Date and Time</p>
        </div>
      </WinnerDetails>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  p {
    font-size: 25px;
    color: grey;
  }
`;
const WinnerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  background: grey;
  margin-top: 10px;

  p {
    margin: 15px 10px;
    color: #000;
  }
`;

export default LeaderBoardPart;
