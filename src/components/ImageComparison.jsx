import { useState } from "react";
import Firtimg from "../assets/Images/Png/1.jpg"
import Secondimg from "../assets/Images/Png/2.png"

export default function ImageComparison() {
  const [position, setPosition] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative w-full max-w-4xl h-[500px] mx-auto overflow-hidden rounded-2xl cursor-ew-resize"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onClick={handleMove}
    >
      {/* Before Image */}
      <img
        src={Secondimg}
        alt="Before"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After Image */}
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

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full border-4 border-gray-300 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          ↔
        </div>
      </div>
    </div>
  );
}