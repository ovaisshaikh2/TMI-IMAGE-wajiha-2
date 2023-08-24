import React from "react";
import CSRimg from "../assets/CSRbn.png";
import CSRone from "../assets/CSR/CSR1.png";
import CSRtwo from "../assets/CSR/CSR2.png";
import CSRthree from "../assets/CSR/CSR3.png";

const CSR = () => {
  return (
    <React.Fragment>
      <section>
        {/* 1 */}
        {/* 1 */}
        <div
          className="relative inline-block xs:h-[auto] lg:h-auto"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="xs:h-[auto] lg:h-auto "
            src={CSRimg}
            alt="ourjouneybanner"
          />
        </div>
        {/* 2 */}
        <div className="text-[#919191] my-5 lg:mx-[15rem] xs:mx-[2rem]">
          <p className=" text-center text-black mb-5 font-light">
            At Image, we are wholeheartedly devoted to creating a positive
            difference in society <br></br>driven by an unwavering belief in the
            power of giving back.
          </p>
          <div className="grid md:grid-cols-3 gap-2 mb-2">
            {/* 1 */}
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="h-full transition duration-300 ease-in-out hover:scale-110"
                src={CSRone}
                alt="CSR"
              />
            </div>
            {/* 2 */}
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="h-full transition duration-300 ease-in-out hover:scale-110"
                src={CSRtwo}
                alt="CSR"
              />
            </div>
            {/* 3 */}
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="h-full transition duration-300 ease-in-out hover:scale-110"
                src={CSRthree}
                alt="CSR"
              />
            </div>
          </div>
          <p className=" text-center text-black font-light">
            Our comprehensive portfolio of corporate social responsibility (CSR)
            initiatives<br></br> exemplifies our drive towards fostering
            substantial change and enhancing the<br></br> well-being of
            communities.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CSR;
