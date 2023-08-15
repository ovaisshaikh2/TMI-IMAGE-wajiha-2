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
        </div>
        {/* 2 */}
        <div className="text-[#919191] my-12 lg:mx-[15rem] xs:mx-[2rem]">
          <p className=" text-start">
            At Image, we are wholeheartedly devoted to creating a positive
            difference in society driven by an unwavering belief in the power of
            giving back.
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
        </div>
      </section>
    </React.Fragment>
  );
};

export default Journey;
