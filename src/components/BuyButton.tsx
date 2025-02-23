"use client";

import { useState } from "react";
import Popup from "./Popup"; // Your existing popup component

interface BuyButtonProps {
  text: string;
  className?: string; // allow overriding styles
}

export default function BuyButton({ text, className = "" }: BuyButtonProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  // Merge your default classes with the optional className prop
  const defaultClasses =
    "text-white font-bold py-3 px-6 rounded-lg text-xl shadow-md transition-all duration-200";

  return (
    <div className="relative">
      <button onClick={handleClick} className={`${defaultClasses} ${className}`}>
        {text}
      </button>

      {showPopup && (
        <Popup message="BFCMEME Exchange Info" onClose={() => setShowPopup(false)} />
      )}
    </div>
  );
}
