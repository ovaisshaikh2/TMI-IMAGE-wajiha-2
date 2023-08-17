import React, { useRef, useEffect, useState } from "react";

const HomeVideo = () => {
  const videoRef = useRef(null);
  const [isPlayingHome, setIsPlayingHome] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      const videoTop = video.getBoundingClientRect().top;
      const videoBottom = video.getBoundingClientRect().bottom;

      if (videoTop <= window.innerHeight && videoBottom >= 0) {
        setIsPlayingHome(true);
      } else {
        setIsPlayingHome(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isPlayingHome) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlayingHome]);

  return (
    <div className="mb-10">
      <video
        className="mx-auto"
        ref={videoRef}
        autoPlay
        controls
        muted
        loop
        src="https://cdn.shopify.com/videos/c/o/v/68a31f2b0f244416ada57dfbe5692025.mp4"
      ></video>
    </div>
  );
};

export default HomeVideo;
