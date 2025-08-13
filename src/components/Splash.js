import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleVideoEnd = () => {
        navigate("/mainmenu")
      };

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      >
        <source src="splash.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
