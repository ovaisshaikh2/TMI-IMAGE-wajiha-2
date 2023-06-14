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
            Established in 1993, Image symbolises elegance, cementing its status
            as one of Pakistan’s leading fashion and retail companies. From
            being a brand that sells unstitched fabric to beautiful
            ready-to-wear ensembles, Image has grown from strength to strength.
          </p>
          <p className="">
            With a strong presence across 5 tier-A cities in Pakistan and online
            global footprint, the brand has garnered widespread acclaim for its
            classic aesthetic and premium quality. Furthermore, the brand
            received the prestigious "Prime Ministers Excellence Award for
            Outstanding Performance in E-commerce", as it became the first
            seller on Amazon with a Pakistani ID.
          </p>
          <p className="">
            To meet the growing demand of unstitched fabric that gives women the
            freedom to stitch and style their outfits uniquely, the brand
            launches premium unstitched Lawnkari, Winterkari and Printkari
            collections respectively. With an unwavering commitment to elegance,
            Image effortlessly combines fashion-forward trends at affordable
            prices.
          </p>
          <p className="">
            With our Ready-to-Wear and unstitched collections, we cater to women
            across the globe who are looking for fashionable and chic attires
            that is committed to unprecedented aesthetic combined with quality.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
