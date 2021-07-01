import React from "react";
import styled from "styled-components";

const CircleDiv = styled.div`
  width: 4vw;
  height: 4vw;
  background-color: rgba(230, 30, 0, 0.3);
  border: 3px solid rgba(250, 20, 0, 0.8);
  position: absolute;
  top: calc(${(props) => props.top}px - 2vw);
  left: calc(${(props) => props.left}px - 2vw);
  box-shadow: 0px 0px 10px 10px black;
  border-radius: 50%;
  z-index: 8;
`;

const Pin = ({ location }) => {
  const { pinX, pinY } = location;
  return <CircleDiv top={pinY} left={pinX} />;
};

export default Pin;
