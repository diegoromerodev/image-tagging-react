const createBox = (e, setSelected) => {
  const percentCoords = {
    pinX: e.clientX + window.scrollX,
    pinY: e.clientY + window.scrollY,
    xOne: ((e.clientX - 20) / e.target.offsetWidth) * 100,
    xTwo: ((e.clientX + 20) / e.target.offsetWidth) * 100,
    yOne:
      ((e.clientY - e.target.offsetTop - 20 + window.scrollY) /
        e.target.offsetHeight) *
      100,
    yTwo:
      ((e.clientY - e.target.offsetTop + 20 + window.scrollY) /
        e.target.offsetHeight) *
      100,
  };
  if (percentCoords.xOne < 0) percentCoords.xOne = 0;
  if (percentCoords.yOne < 0) percentCoords.yOne = 0;
  if (percentCoords.xOne >= 100) percentCoords.xOne = 98;
  if (percentCoords.yOne >= 100) percentCoords.yOne = 98;
  if (percentCoords.xTwo > 100) percentCoords.xTwo = 100;
  if (percentCoords.yTwo > 100) percentCoords.yTwo = 100;
  setSelected(percentCoords);
};

export default createBox;
