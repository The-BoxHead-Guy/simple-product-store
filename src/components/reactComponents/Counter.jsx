import { useState } from "react";
import iconMinus from "../../assets/icons/icon-minus.svg";
import iconPlus from "../../assets/icons/icon-plus.svg";

const Counter = ({ increase, decrease, quantity }) => {
  return (
    <div className="flex items-center justify-between gap-8 px-6 py-4 bg-gray-100 rounded-lg w-full lg:shrink-2">
      <button
        onClick={decrease}
        className="font-bold text-primary text-4xl cursor-pointer "
      >
        <img src={iconMinus.src} alt="Minus" />
      </button>

      <span>{quantity}</span>

      <button
        onClick={increase}
        className="font-bold text-primary text-4xl cursor-pointer "
      >
        <img src={iconPlus.src} alt="Plus" />
      </button>
    </div>
  );
};

export default Counter;
