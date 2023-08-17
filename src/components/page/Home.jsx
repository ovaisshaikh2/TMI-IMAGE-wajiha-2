import React from "react";
import {
  HomeSlider,
  HomeVideo,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
} from "../index";

const Home = (props) => {
  return (
    <React.Fragment>
      <HomeSlider />
      <Second />
      <HomeVideo />
      <Third {...props} />
      <Fourth {...props} />
      <Fifth {...props} />
      <Sixth {...props} />
    </React.Fragment>
  );
};

export default Home;
