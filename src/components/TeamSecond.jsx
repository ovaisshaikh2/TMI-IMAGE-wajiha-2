import React, { useState } from "react";
import Flickity from "react-flickity-component";

import "../styles/flickity.css";

const flickityOptions = {
  initialIndex: 0,
  groupCells: true,
  // autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
};
const TeamSecond = () => {
  const [isActiveBtn1, setIsActiveBtn1] = useState(true);
  const [isActiveBtn2, setIsActiveBtn2] = useState(false);
  const [isActiveBtn3, setIsActiveBtn3] = useState(false);
  const [isActiveBtn4, setIsActiveBtn4] = useState(false);

  const [isActiveBtn5, setIsActiveBtn5] = useState(false);
  const [isActiveBtn6, setIsActiveBtn6] = useState(false);
  const [isActiveBtn7, setIsActiveBtn7] = useState(false);

  const handleClickBtn1 = () => {
    setIsActiveBtn1(true);
    setIsActiveBtn2(false);
    setIsActiveBtn3(false);
    setIsActiveBtn4(false);
    setIsActiveBtn5(false);
    setIsActiveBtn6(false);
    setIsActiveBtn7(false);
  };
  const handleClickBtn2 = () => {
    setIsActiveBtn1(false);
    setIsActiveBtn2(true);
    setIsActiveBtn3(false);
    setIsActiveBtn4(false);
    setIsActiveBtn5(false);
    setIsActiveBtn6(false);
    setIsActiveBtn7(false);
  };
  const handleClickBtn3 = () => {
    setIsActiveBtn1(false);
    setIsActiveBtn2(false);
    setIsActiveBtn3(true);
    setIsActiveBtn4(false);
    setIsActiveBtn5(false);
    setIsActiveBtn6(false);
    setIsActiveBtn7(false);
  };
  const handleClickBtn4 = () => {
    setIsActiveBtn1(false);
    setIsActiveBtn2(false);
    setIsActiveBtn3(false);
    setIsActiveBtn4(true);
    setIsActiveBtn5(false);
    setIsActiveBtn6(false);
    setIsActiveBtn7(false);
  };

  const handleClickBtn5 = () => {
    setIsActiveBtn1(false);
    setIsActiveBtn2(false);
    setIsActiveBtn3(false);
    setIsActiveBtn4(false);
    setIsActiveBtn5(true);
    setIsActiveBtn6(false);
    setIsActiveBtn7(false);
  };
  const handleClickBtn6 = () => {
    setIsActiveBtn1(false);
    setIsActiveBtn2(false);
    setIsActiveBtn3(false);
    setIsActiveBtn4(false);
    setIsActiveBtn5(false);
    setIsActiveBtn6(true);
    setIsActiveBtn7(false);
  };
  const handleClickBtn7 = () => {
    setIsActiveBtn1(false);
    setIsActiveBtn2(false);
    setIsActiveBtn3(false);
    setIsActiveBtn4(false);
    setIsActiveBtn5(false);
    setIsActiveBtn6(false);
    setIsActiveBtn7(true);
  };
  return (
    <React.Fragment>
      <h1 className="text-3xl text-center my-8 text-black">
        AN ENSEMBLE OF PASSIONATE PROFESSIONALS
      </h1>
      <p className="text-[#919191] text-center xs:mx-4 md:mx-20 lg:mx-40 xs:text-sm lg:text-base my-10 lg:my-16 xsm:mx-80">
        At Image, our success is fuelled by an inclusive and accomplished team
        of nearly 1.000 employees. From our artisan craftsmen and factory
        personnel to our devoted retail associates and our managerial staff,
        each member plays an indispensable role in the brand's expansion.
        Together, we strive to offer the finest quality and immersive fashion
        experiences for our customers around the world.
      </p>

      <div>
        <h1 className="xs:text-xl md:text-2xl lg:text-3xl text-center font-medium lg:mb-8 xs:mb-4">
          CURRENT OPPORTUNITIES
        </h1>

        <div className="justify-evenly xs:mx-4 md:mx-[2rem] lg:mx-[15rem]">
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            <div className="team-btn">
              <button
                style={{
                  color: isActiveBtn1 ? "#737373" : "",
                }}
                onClick={handleClickBtn1}
                className="text-[#a1a1aa] xs:text-sm md:text-base font-medium"
              >
                Textile Designer
              </button>
            </div>
            <div className="team-btn">
              <button
                style={{
                  color: isActiveBtn2 ? "#737373" : "",
                }}
                onClick={handleClickBtn2}
                // hover-underline-animations2
                className="text-[#a1a1aa] xs:text-sm md:text-base font-medium "
              >
                Fashion Designer
              </button>
            </div>
            <div className="team-btn">
              <button
                style={{
                  color: isActiveBtn3 ? "#737373" : "",
                }}
                onClick={handleClickBtn3}
                className="text-[#a1a1aa] xs:text-sm md:text-base font-medium"
              >
                CAD Designer
              </button>
            </div>
            <div className="team-btn">
              <button
                style={{
                  color: isActiveBtn4 ? "#737373" : "",
                }}
                onClick={handleClickBtn4}
                className="text-[#a1a1aa] xs:text-sm md:text-base font-medium"
              >
                Customer Service Representative
              </button>
            </div>
            {/*  */}
            <div className="team-btn">
              <button
                style={{
                  color: isActiveBtn5 ? "#737373" : "",
                }}
                onClick={handleClickBtn5}
                className="text-[#a1a1aa] xs:text-sm md:text-base font-medium"
              >
                IT Officer
              </button>
            </div>
            <div className="team-btn">
              <button
                style={{
                  color: isActiveBtn6 ? "#737373" : "",
                }}
                onClick={handleClickBtn6}
                className="text-[#a1a1aa] xs:text-sm md:text-base font-medium"
              >
                Photographer
              </button>
            </div>
            <div className="team-btn">
              <button
                style={{
                  color: isActiveBtn7 ? "#737373" : "",
                }}
                onClick={handleClickBtn7}
                className="text-[#a1a1aa] xs:text-sm md:text-base font-medium"
              >
                Data Entry Operator
              </button>
            </div>
          </Flickity>
        </div>

        <div className="text-[#919191] text-center xs:my-5 md:my-10 md:mx-[5rem] lg:mx-[15rem] xs:text-xs lg:text-sm">
          {isActiveBtn1 && (
            <p data-aos="fade-up" data-aos-duration="1000">
              <strong>Education:</strong> The candidate must have Bachelor’s in
              Textile.
              <br />
              <strong>Designing Experience:</strong> 2 years of experience as an
              Embroidery Designer.
            </p>
          )}
          {isActiveBtn2 && (
            <p data-aos="fade-up" data-aos-duration="1000">
              <strong>Education:</strong> Candidate must have Bachelor’s in
              Fashion Designing.
              <br />
              <strong>Designing Experience:</strong> 2 years of experience in
              Fashion Designing.
            </p>
          )}
          {isActiveBtn3 && (
            <p data-aos="fade-up" data-aos-duration="1000">
              <strong>Education:</strong> Have a Bachelor’s degree or Master’s
              degree.
              <br />
              <strong>Designing Experience:</strong> 3-4 years in Print/CAD
              Design at a Textile/Retail/Fashion brand.
              <br />
              <strong>Skills:</strong> Be highly skilled at Photoshop and
              Illustrator.
            </p>
          )}
          {isActiveBtn4 && (
            <p data-aos="fade-up" data-aos-duration="1000">
              <strong>Education:</strong> Min. Bachelor's of Business
              Administration
              <br />
              <strong>Designing Experience:</strong> 2-3 years of experience in
              relevant field
            </p>
          )}

          {isActiveBtn5 && (
            <p data-aos="fade-up" data-aos-duration="1000">
              <strong>Education:</strong> Candidate must have Bachelor's in
              Computer Science.
              <br />
              <strong>Designing Experience:</strong> 2-4 years of experience in
              relevant field.
              <br />
              <strong>Skills:</strong> Networking, Troubleshooting, Software,
              and Hardware installation.
            </p>
          )}
          {isActiveBtn6 && (
            <p data-aos="fade-up" data-aos-duration="1000">
              <strong>Type of Job: </strong> Part-Time / Flexible Position
              <br />
              <strong>Requirements:</strong> Photography Certification, Degree,
              or Apprenticeship
              <br />
              <strong>Skills:</strong> Strong Creative and Post processing
              skills
            </p>
          )}

          {isActiveBtn7 && (
            <p data-aos="fade-up" data-aos-duration="1000">
              <strong>Education: </strong> Intermediate
              <br />
              <strong>Skills:</strong> Advance MS Excel
              <br />
              <strong>Experience:</strong> More than 2 years of experience as a
              data entry operator
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamSecond;
