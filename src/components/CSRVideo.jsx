import React, { useRef, useEffect, useState } from "react";

const CSRVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      const videoTop = video.getBoundingClientRect().top;
      const videoBottom = video.getBoundingClientRect().bottom;

      if (videoTop <= window.innerHeight && videoBottom >= 0) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <div className="my-10">
      <video
        className="mx-auto"
        muted
        ref={videoRef}
        autoPlay
        loop
        controls
        src="https://cdn.shopify.com/videos/c/o/v/ad4158634d774413a444709db1d0dcc4.mp4"
      ></video>
      {/* <div style={{ height: "50px" }}></div>  */}
    </div>
  );
};

export default CSRVideo;
