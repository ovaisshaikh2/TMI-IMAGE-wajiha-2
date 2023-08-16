import React from "react";
import CSRimg from "../assets/CSRbn.png";
import CSRone from "../assets/CSR/CSR1.png";
import CSRtwo from "../assets/CSR/CSR2.png";
import CSRthree from "../assets/CSR/CSR3.png";
import CSRfour from "../assets/CSR/CSRCHamp.png";
import CSRfive from "../assets/CSR/CSRicon.png";
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
          <p className=" text-center text-black mb-5">
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
          <p className=" text-center text-black">
            Our comprehensive portfolio of corporate social responsibility (CSR)
            initiatives<br></br> exemplifies our drive towards fostering
            substantial change and enhancing the<br></br> well-being of
            communities.
          </p>
        </div>
      </section>
      <section>
        <div className="grid md:grid-cols-2 gap-1 mb-2 pt-10 md:px-20 xs:px-5 items-center">
          {/* 1 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat xs:mb-10">
            <p className="text-start text-black md:text-[1.5rem] xs:text-[1rem]">
              We have a long-standing tradition of bolstering sports development
              and nurturing budding potential talent. In testament to this
              legacy, we proudly sponsor squash championships, offering an
              incredible opportunity for promising athletes to display their
              expertise and enthusiasm for the sport.
            </p>
          </div>
          {/* 2 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat xs:-order-1 xs:mb-10">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={CSRfour}
              alt="CSR"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="grid md:grid-cols-2 gap-1 mb-2 py-10 md:px-20 xs:px-5 items-center bg-slate-100">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full w-50 transition duration-300 ease-in-out hover:scale-110 mx-auto"
              src={CSRfive}
              alt="CSR"
            />
          </div>
          {/* 1 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <h2 className="md:text-[1.5rem] xs:text-[1.5rem]">
              OUR COMMITMENT
            </h2>
            <p className=" text-start text-black md:text-[1.5rem] xs:text-[1rem]">
              Moving forward, we continue to prioritise efforts geared towards
              fostering the next wave of squash players, reaffirming our
              commitment to advancing the vibrant sports culture in our
              community. Beyond sports, we are ardent about furnishing an array
              of pathways and opportunities for the youth to acquire knowledge,
              evolve, and prosper. Our focus is on cultivating their inherent
              abilities, arming them with the aptitudes they need to adapt and
              succeed in a swiftly changing world.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CSR;
