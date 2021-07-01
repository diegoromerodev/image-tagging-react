import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LeaderboardContainer = styled.div`
  padding-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeaderboardElement = styled.div`
  background-color: #c2c2c2;
  margin: 1em 0;
  width: 700px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & h3 {
    font-size: 2em;
    padding: 10px;
    width: 100%;
    background-color: #a0a0a0;
  }
  & p {
    padding: 10px;
    font-size: 3em;
  }
`;

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("scores")
      .get()
      .then((querySnapshot) => {
        const scoreData = [];
        querySnapshot.forEach((doc) => {
          scoreData.push(doc.data());
        });
        return Promise.resolve(scoreData);
      })
      .then((data) => {
        setScores(data.sort((a, b) => b.finalScore - a.finalScore));
      });
  }, []);
  return (
    <LeaderboardContainer>
      <h1>TOP SCORES</h1>
      {scores?.map((element) => (
        <LeaderboardElement>
          <h3>{element?.playerName}</h3>
          <p>{element?.finalScore}</p>
        </LeaderboardElement>
      ))}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
