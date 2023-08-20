import React from "react";
import Journeyimg from "../assets/Mask Group 29.png";

const Journey = () => {
  return (
    <React.Fragment>
      <section>
        {/* 1 */}
        {/* 1 */}
        <div
          className="relative inline-block xs:h-[10rem] lg:h-auto"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="xs:h-[10rem] lg:h-auto "
            src={Journeyimg}
            alt="ourjouneybanner"
          />
          <div className="whitespace-nowrap absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 z-10 text-white text-center p-5">
            <h2 className="xs:text-base lg:text-4xl xl:text-6xl xl:leading-[5rem]">
              A JOURNEY
              <br /> THROUGH THE DECADES
            </h2>
          </div>
        </div>
        <div className="text-[#919191] my-12 lg:mx-[15rem] xs:mx-[2rem]">
          <h1 className="text-3xl text-center my-8 text-black">OUR JOURNEY</h1>
          <p className=" text-start xs:text-[1rem]">
            Image capitalized on the changing retail landscape of Pakistan and
            built stores across major cities in Pakistan that provide superior
            products both in terms of quality and design, with the value
            addition of selling 'Designer Clothing' at affordable prices. Since
            its entry into the retail design industry in July 2015, Image has
            established itself as a high-quality fashion label in clothing in a
            short span of time.<br></br>
            <br></br>
            Commitment to excellence and creativity, has made Image one of the
            most acclaimed household names amongst fashion brands. Image also
            has a strong e-commerce presence, both nationally and
            internationally, and in 2021, Image became the first Pakistani
            seller to be officially listed on Amazon. Being included in the
            seller's list enabled Image to gain access to more than 400 million
            consumers across the world.
          </p>
        </div>
        {/* 2 */}
        <div className="text-[#919191] my-12 lg:mx-[15rem] xs:mx-[2rem]">
          <h1 className="text-3xl text-center my-8 text-black">
            EXPANDING OUR FOOTPRINT ACROSS THE WORLD
          </h1>
          <p className=" text-start xs:text-[1rem]">
            Discover Image Pakistan’s enthralling collections across our eleven
            stores, located within five major cities: Karachi, Lahore, Peshawar,
            Rawalpindi, and Islamabad. As we scale to new heights by going
            global, we bring our distinctive style and impeccable craftsmanship
            closer to fashion aficionados around the country.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Journey;
