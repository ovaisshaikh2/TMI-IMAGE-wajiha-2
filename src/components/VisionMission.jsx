import React from "react";
import vision from "../assets/Vision.png";
import mission from "../assets/Mission.png";
import coreValue from "../assets/Core Value.jpg";

const VisionMission = () => {
  return (
    <React.Fragment>
      <div className="xs:mx-2 xll:mx-60 my-8 lg:mb-20">
        {/* 1 */}
        <div className="lg:grid grid-cols-2 xs:flex flex-col-reverse">
          <div className="flex flex-col lg:justify-center text-[#919191] items-start lg:ml-32 xs:my-10 lg:mt-0 xs:mx-4 lg:mx-0">
            <h1 className="uppercase text-3xl mb-6 text-black">Vision</h1>
            <p>
              Image is committed to strive for excellence in all areas of its
              activity.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={vision} alt="vision" />
          </div>
        </div>
        {/* 2 */}
        <div className="lg:grid grid-cols-2 xs:mt-4 lg:mt-10 xs:flex flex-col">
          <div className="flex justify-center">
            <img src={mission} alt="mission" />
          </div>
          <div className="flex flex-col justify-center text-[#919191] items-start lg:mr-32 xs:my-10 lg:mt-0 xs:mx-4 lg:mx-0">
            <h1 className="uppercase text-3xl mb-6 text-black">Mission</h1>
            <p>
              Providing quality products that promote commerce and industry with
              the objective of contributing to the nation’s prosperity.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="lg:grid grid-cols-2 xs:flex flex-col-reverse">
          <div className="flex flex-col lg:justify-center text-[#919191] items-start lg:ml-32 xs:my-10 lg:mt-0 xs:mx-4 lg:mx-0">
            <h1 className="uppercase text-3xl mb-6 text-black">Core Value</h1>
            <p>We Believe in 3C’s: Commitment, Competence & Consistency.</p>
          </div>
          <div className="flex justify-center">
            <img src={coreValue} alt="coreValue" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VisionMission;
