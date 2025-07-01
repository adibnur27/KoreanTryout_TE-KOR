import React, { useState } from 'react';
import clsx from 'clsx';

export default function FlipCard({
  frontTopText,
  frontBottomText,
  backContent
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-40 h-60 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
          flipped && "rotate-y-180"
        )}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-kr-blue via-white to-kr-red border rounded-xl shadow-md backface-hidden flex flex-col justify-center items-center text-xl font-bold px-2 text-center">
          <div>{frontTopText}</div>
          <div className="mt-2">{frontBottomText}</div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-tr from-kr-blue via-white to-kr-red text-black border rounded-xl shadow-md rotate-y-180 backface-hidden flex items-center justify-center text-xl font-bold px-2 text-center">
          {backContent}
        </div>
      </div>
    </div>
  );
}
