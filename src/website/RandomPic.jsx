import React from "react";
import "../randompic.css";

const RandomPic = () => {
  const imgUrl1 = "https://picsum.photos/200/300";
  const imgUrl2 = "https://picsum.photos/250/300";
  const link = "https://www.google.com/";
  return (
    <>
      <div className="img_div">
        <img src="https://picsum.photos/300/300" alt="RANDOM IMAGES" />
        <img src={imgUrl1} alt="random images" />
        <a href={link} target="blank">
          <img src={imgUrl2} alt="randomImages" />
        </a>
      </div>
      <h2 className="center">clickable image last one</h2>
    </>
  );
};

export default RandomPic;
