import React from "react";

const Social = () => {
  return (
    // xs:grid-cols-7
    <div className="grid xs:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 xll:grid-cols-7 xs:gap-2 sg:gap-4 xll:gap-[3rem] sx:mt-16 lg:mt-0 text-black ">
      {/* @Facebook */}
      <p className="bg-white rounded-full social-icon hover:animate-bounce">
        <a
          href="https://www.facebook.com/image.est1993/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-facebook-f sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p>
      {/* @Email */}
      <p className="bg-white rounded-full social-icon hover:animate-bounce">
        <a type="email" href="mailto:info@image.net.pk" rel="noreferrer">
          <i class="fa-sharp fa-regular fa-envelope sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p>
      {/* @Twitter */}
      <p className="bg-white rounded-full social-icon hover:animate-bounce">
        <a
          href="https://twitter.com/image_est1993?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-twitter sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p>
      {/* @Instagram */}
      <p className="bg-white rounded-full social-icon hover:animate-bounce">
        <a
          href="https://www.instagram.com/image.est1993/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-instagram sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p>
      {/* @Linkedin */}
      <p className="bg-white rounded-full social-icon hover:animate-bounce">
        <a
          href="https://pk.linkedin.com/company/image-pakistan-ltd"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin-in sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p>
      {/* @Youtube */}
      {/* <p className="bg-white rounded-full social-icon">
        <a href="https://www.w3schools.com/">
          <i class="fa-brands fa-youtube sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p> */}
      {/* @Snapchat */}
      {/* <p className="bg-white rounded-full social-icon">
        <a href="https://www.w3schools.com/">
          <i class="fa-brands fa-snapchat sx:text-sm sm:text-lg md:text-sm xl:text-lg p-2 flex justify-center"></i>
        </a>
      </p> */}
    </div>
  );
};

export default Social;
