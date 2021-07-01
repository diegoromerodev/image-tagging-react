import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledButton from "../styles/StyledButton";

const PopupDiv = styled.div`
  padding: 40px;
  background-color: #333;
  border: 3px solid #fab2a2;
  color: #fafafa;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 0.5em 0;
  }
`;

const PopupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(6, 6, 6, 0.8);
  ${(props) => props.hidden};
`;

const StartPopup = ({ isImageLoaded }) => {
  const [hidden, setHidden] = useState("");
  const handleClick = () => {
    if (!isImageLoaded) return;
    firebase.firestore().collection("imgs").doc("img-1").update({
      startTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setHidden("display: none");
  };
  return (
    <PopupContainer hidden={hidden}>
      <PopupDiv>
        <p>YOU NEED TO FIND:</p>
        <p>
          <strong>A TOOTH FAIRY</strong> & <strong>A GIRL IN A BIKINI</strong>
        </p>
        <StyledButton onClick={handleClick}>START GAME</StyledButton>
      </PopupDiv>
    </PopupContainer>
  );
};

export default StartPopup;
