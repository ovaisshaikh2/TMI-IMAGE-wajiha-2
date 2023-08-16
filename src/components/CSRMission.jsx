import React from "react";
import CSRsix from "../assets/CSR/CSRlast.png";

const CSRMission = () => {
  return (
    <React.Fragment>
      <section>
        <div className="text-[#919191] my-5 lg:mx-[15rem] xs:mx-[2rem]">
          <h2 className=" text-center text-black mb-5 md:text-[2.5rem] xs:text-[1.5rem]">
            JOIN US IN OUR MISSION
          </h2>
        </div>
        <div
          className="relative inline-block xs:h-[auto] lg:h-auto"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="xs:h-[auto] lg:h-auto px-10"
            src={CSRsix}
            alt="ourjouneybanner"
          />
        </div>
        <div className="text-[#919191] my-5 lg:mx-[15rem] xs:mx-[2rem]">
          <p className=" text-center text-black mb-10">
            Collectively, we can illuminate the path towards a better future
            ensuring that every individual is afforded equitable access to
            exemplary education, opportunities for development, and the
            resources to manifest their aspirations. join us in our mission of
            inspiring change that resonates far and wide.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CSRMission;
