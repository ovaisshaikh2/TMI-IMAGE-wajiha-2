import React from "react";
import aboutpic from "../assets/about-pic.png";
import "../styles/About.css";

const About = () => {
  return (
    <React.Fragment>
      <div className="lg:grid grid-cols-5">
        {/* 1 */}
        <div
          className="lg:col-span-3 lg:mx-16 lg:my-20"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <img src={aboutpic} alt="ImageAbout" />
        </div>
        {/* 2 */}
        <div className="lg:col-span-2 justify-center text-[#919191] flex flex-col items-start lg:mr-32 xs:my-10 lg:mt-0 xs:mx-4 lg:mx-0">
          <h1 className="uppercase text-3xl mb-6 text-black">About Image</h1>
          <p className="">
            Established in 1993 as a fabric manufacturing company, Image
            Pakistan Limited has grown to be one of Pakistan’s leading fashion
            and retail houses. Image’s Schiffli embroidered fabric has been
            renowned for its classic aesthetic and premium quality in the
            textile field for decades. In a short span of a few years, Image has
            established itself as a high-quality, fashion-forward clothing brand
            with a store presence across five cities in Pakistan and a strong
            global online presence; we ensure our product is accessible to women
            worldwide.
          </p>
          <br></br>
          <p className="">
            To cater to the different needs of our customers, we offer both
            Unstitched and Ready-to-Wear collections. We aim to create
            affordable products that are minimal, chic, and timeless for women
            across the globe. For our company’s outstanding performance in
            e-commerce, including setting up the first shop on Amazon with a
            Pakistan ID, we were awarded the “Prime Ministers Excellence Award”
            at the National E-Commerce Convention in February 2022.
          </p>
          <br></br>
          <p className="">
            The quality of our fabric, stitching and chic yet timeless style has
            made Image one of the most acclaimed household names today.
          </p>
          {/* <br></br>
          <p className="">
            With our Ready-to-Wear and unstitched collections, we cater to women
            across the globe who are looking for fashionable and chic attires
            that is committed to unprecedented aesthetic combined with quality.
          </p> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
