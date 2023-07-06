import React, { useEffect, useState } from "react";

const ScreenWidthDetector: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>Aktuelle Bildschirmbreite: {screenWidth}</div>;
};

export default ScreenWidthDetector;
