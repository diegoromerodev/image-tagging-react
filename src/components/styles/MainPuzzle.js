import styled from "styled-components";

const PuzzleImage = styled.img`
  width: 100%;
  position: absolute;
  z-index: -2;
`;

const ImageContainer = styled.div`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const ImageWithNav = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
`;

export { PuzzleImage, ImageContainer, ImageWithNav };
