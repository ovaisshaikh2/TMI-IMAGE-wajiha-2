import React from "react";
import CSRfour from "../assets/CSR/CSRCHamp.png";
import CSRfive from "../assets/CSR/CSRicon.png";
const CSRchamp = () => {
  return (
    <React.Fragment>
      <section>
        <div className="grid md:grid-cols-2 gap-1 mb-2 pt-10 md:px-20 xs:px-5 items-center">
          {/* 1 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat xs:mb-10">
            <p className="text-start text-black md:text-[1.5rem] xs:text-[1rem] md:pr-10 tracking-normal font-light">
              We have a long-standing tradition of bolstering sports development
              and nurturing budding potential talent. In testament to this
              legacy, we proudly sponsor squash championships, offering an
              incredible opportunity for promising athletes to display their
              expertise and enthusiasm for the sport.
            </p>
          </div>
          {/* 2 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat xs:mb-10">
            <img
              className="h-full transition duration-300 ease-in-out hover:scale-110"
              src={CSRfour}
              alt="CSR"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="grid md:grid-cols-2 gap-1 mb-2 py-10 md:px-20 xs:px-5 items-center bg-slate-100 web">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full w-50 transition duration-300 ease-in-out hover:scale-110 mx-auto"
              src={CSRfive}
              alt="CSR"
            />
          </div>
          {/* 1 */}
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <h2 className="md:text-[2rem] md:mb-5 xs:text-[1.5rem]">
              OUR COMMITMENT
            </h2>
            <p className=" text-start text-black md:text-[1.5rem] xs:text-[1rem] font-light">
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
        <div className="grid md:grid-cols-2 gap-1 mb-2 py-10 md:px-20 xs:px-5 items-center bg-slate-100 mob">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <h2 className="md:text-[1.5rem] xs:text-[1.5rem]">
              OUR COMMITMENT
            </h2>
            <p className=" text-start text-black md:text-[1.5rem] xs:text-[1rem] font-light">
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
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="h-full w-50 transition duration-300 ease-in-out hover:scale-110 mx-auto"
              src={CSRfive}
              alt="CSR"
            />
          </div>
          {/* 1 */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default CSRchamp;
