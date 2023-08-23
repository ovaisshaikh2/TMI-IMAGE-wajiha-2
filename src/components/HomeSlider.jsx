import React from "react";
import Flickity from "react-flickity-component";
import Slide1 from "../assets/HomeSlider/s1.jpg";
import Slide2 from "../assets/HomeSlider/s2.jpg";
import Slide3 from "../assets/HomeSlider/s3.jpg";
import Slide4 from "../assets/HomeSlider/s4.jpg";
import mSlide1 from "../assets/HomeSlider/ms1.png";
import mSlide2 from "../assets/HomeSlider/ms2.png";
import mSlide3 from "../assets/HomeSlider/ms3.png";
import mSlide4 from "../assets/HomeSlider/ms4.png";

import "../styles/flickity.css";

const flickityOptions = {
  initialIndex: 0,
  groupCells: false,
  autoPlay: true,
  pageDots: false,
  prevNextButtons: true,
  draggable: true,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
};

const HomeSlider = () => {
  return (
    <Flickity
      className={"carousel mb-10"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      <div className="event-carousell">
        <img className="flic-img web" src={Slide4} alt="Events1" />
        <img className="flic-img mob wm" src={mSlide1} alt="Events1" />
      </div>
      <div className="event-carousell">
        <img className="flic-img web" src={Slide1} alt="Events2" />
        <img className="flic-img mob wm" src={mSlide2} alt="Events2" />
      </div>
      <div className="event-carousell">
        <img className="flic-img web" src={Slide2} alt="Events3" />
        <img className="flic-img mob wm" src={mSlide3} alt="Events3" />
      </div>
      <div className="event-carousell">
        <img className="flic-img web" src={Slide3} alt="Events4" />
        <img className="flic-img mob wm" src={mSlide4} alt="Events4" />
      </div>
    </Flickity>
  );
};

export default HomeSlider;
