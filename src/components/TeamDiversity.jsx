import React from "react";
import diversity1 from "../assets/IMG_7505.png";
import diversity2 from "../assets/Mask Group 35.png";
import diversity3 from "../assets/01.png";
import diversity4 from "../assets/Mask Group 34.png";
import diversity5 from "../assets/Mask Group 33.png";

const TeamDiversity = () => {
  return (
    <React.Fragment>
      <div className="xs:mx-4 xs:my-8 md:mx-10 md:my-10 lg:mx-40 lg:my-28 xs:mb-20">
        <h1 className="xs:text-xl md:text-2xl lg:text-3xl text-center font-medium lg:mb-6 xs:mb-4">
          UPLIFTING OUR PEOPLE
        </h1>

        <p
          className="text-[#919191] text-center xs:my-5 md:my-8 md:mt-4 xsm:mb-12 md:mx-[5rem] xsm:mx-[12rem]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our employees are the brand’s backbone. Fostering a secure, inclusive,
          and enriching environment that upholds respect and integrity is at the
          core of our philosophy. Our commitment towards our team’s personal and
          professional growth is reflected through holistic workshops and
          training courses, aided by skilled mentors, which enhance their skill
          sets and enable them to unlock their true potential. At Image, we
          strive to cultivate a culture where each individual is respected,
          empowered, and inspired to succeed.
        </p>

        <div className="grid md:grid-cols-3 gap-2 mb-2">
          {/* 1 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity1}
              alt="diversity"
            />
          </div>
          {/* 2 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity2}
              alt="diversity"
            />
          </div>
          {/* 3 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity3}
              alt="diversity"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-2">
          {/* 4 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity4}
              alt="diversity"
            />
          </div>
          {/* 5 */}
          <div className="relative  overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={diversity5}
              alt="diversity"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamDiversity;
