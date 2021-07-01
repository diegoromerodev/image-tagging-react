import React from "react";
import styled from "styled-components";

const RoundedDiv = styled.div`
  border-radius: 5px;
  background-color: #bababa;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  border: 1px solid #7a7a7a;
  z-index: 2;
  ${(props) => props.hide && "display: none"};
  box-shadow: 0 0 10px rgba(5, 5, 5, 0.5);
`;

const DropElement = styled.div`
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  padding: 15px;
  border-top: 1px solid #7a7a7a;
  &:hover {
    background-color: #333;
    color: #fafafa;
    border-top: 1px solid #333;
  }
  &:first-child {
    border-top: none;
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

const Dropdown = (props) => {
  const { hide, top, left, setClicked, setHide } = props;
  console.log({ top, left });

  const handleClick = (e) => {
    setHide(true);
    setClicked(e.target.id);
  };

  return (
    <RoundedDiv hide={hide} top={top} left={left}>
      <DropElement id="tooth-fairy" onClick={handleClick}>
        <p style={{ pointerEvents: "none" }}>TOOTH FAIRY</p>
      </DropElement>
      <DropElement id="bikini-lady" onClick={handleClick}>
        <p style={{ pointerEvents: "none" }}>CHICK IN BIKINI</p>
      </DropElement>
    </RoundedDiv>
  );
};

export default Dropdown;
