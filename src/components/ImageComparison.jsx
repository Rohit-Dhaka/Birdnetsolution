import { useState, useEffect } from "react";
import Firtimg from "../assets/Images/Png/1.webp";
import Secondimg from "../assets/Images/Png/2.webp";

export default function ImageComparison() {
  const [position, setPosition] = useState(50);

  useEffect(() => {
    let direction = 1;

    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 100) direction = -1;
        if (prev <= 0) direction = 1;

        return prev + direction * 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl sm:h-[500px] h-[200px] mx-auto overflow-hidden rounded-2xl">
      
      {/* Before */}
      <img
        src={Secondimg}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={Firtimg}
          alt="After"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full shadow-xl -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-bold">
          ↔
        </div>
      </div>

    </div>
  );
}