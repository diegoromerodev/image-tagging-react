import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import StyledButton from "../styles/StyledButton";

const GameOverContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.hidden ? "display: none" : "")};
`;

const GameOverBox = styled.div`
  border: 3px solid #fab2a2;
  padding: 40px;
  background-color: #333;
  color: #fafafa;
  text-align: center;
  & > * {
    margin: 10px auto;
  }
`;

const GameOverPopup = () => {
  const [finalScore, setFinalScore] = useState("Calculating...");
  const [hidden, setHidden] = useState(false);
  const call = firebase.firestore().collection("imgs").doc("img-1");
  useEffect(() => {
    call
      .update({
        endTime: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((obj) => call.get())
      .then((doc) => Promise.resolve(doc.data()))
      .then((data) =>
        setFinalScore(10000 - (data.endTime.seconds - data.startTime.seconds))
      );
  }, []);
  const handleSend = () => {
    let playerName = document.getElementById("player-name").value;
    if (!playerName) playerName = "Anonymous";
    firebase.firestore().collection("scores").add({ playerName, finalScore });
    setHidden(true);
  };

  return (
    <GameOverContainer hidden={hidden}>
      {hidden && <Redirect to="/leaderboard" />}
      <GameOverBox>
        <h1>GAME OVER</h1>
        <h2>SCORE: {finalScore}</h2>
        <input
          style={{ fontSize: "1.1em", padding: "10px" }}
          type="text"
          placeholder="Enter your name:"
          id="player-name"
        />
        <StyledButton onClick={handleSend}>SEND SCORE</StyledButton>
      </GameOverBox>
    </GameOverContainer>
  );
};

export default GameOverPopup;
