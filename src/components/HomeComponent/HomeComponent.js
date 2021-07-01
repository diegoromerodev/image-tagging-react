import React, { useEffect, useState } from "react";

import PuzzleImg from "../../assets/PuzzleImg.png";
import Dropdown from "../Dropdown";
import GameOverPopup from "./GameOverPopup";
import Pin from "./Pin";
import StartPopup from "./StartPopup";
import {
  PuzzleImage,
  ImageContainer,
  ImageWithNav,
} from "../styles/MainPuzzle";
import createBox from "./createBox";

const HomeComponent = (props) => {
  const { locations } = props;
  const [hide, setHide] = useState(true);
  const [clicked, setClicked] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [selected, setSelected] = useState({});
  const [found, setFound] = useState([]);
  const [pinCoords, setPinCoords] = useState({});
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (found.length === 2) {
      setGameOver(true);
    }
    if (!clicked || !hide) return;
    if (found.includes(clicked)) return;
    const box = locations[clicked];
    if (
      (selected.xOne >= box[0] || selected.xOne <= box[1]) &&
      selected.yOne >= box[2] &&
      selected.yTwo <= box[3]
    ) {
    } else if (
      (selected.xTwo >= box[0] || selected.xTwo <= box[1]) &&
      selected.yOne >= box[2] &&
      selected.yTwo <= box[3]
    ) {
    } else {
      return;
    }
    setFound((prevState) => [...prevState, clicked]);
    setPinCoords((prevState) => {
      prevState[clicked] = selected;
      return prevState;
    });
  });

  return (
    <ImageWithNav>
      {gameOver && <GameOverPopup />}
      <StartPopup isImageLoaded={isImageLoaded} />
      {found.map((img) => (
        <Pin location={pinCoords[img]} />
      ))}
      <ImageContainer id="img-cont">
        <PuzzleImage
          id="puzzle-img"
          onLoad={() => setIsImageLoaded(true)}
          onClick={(e) => {
            const { clientX, clientY } = e;
            setCoords({
              x: clientX + window.scrollX,
              y: clientY + window.scrollY,
            });
            setHide((prevState) => !prevState);
            createBox(e, setSelected);
          }}
          src={PuzzleImg}
          alt="puzzle"
        />
        <Dropdown
          setHide={setHide}
          setClicked={setClicked}
          hide={hide}
          left={coords.x}
          top={coords.y}
        />
      </ImageContainer>
    </ImageWithNav>
  );
};

export default HomeComponent;
