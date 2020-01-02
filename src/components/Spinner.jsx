import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid lightsteelblue;
  border-right: 2px solid lightsteelblue;
  border-bottom: 2px solid lightsteelblue;
  border-left: 4px solid darkblue;
  background: transparent;
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export default Spinner;