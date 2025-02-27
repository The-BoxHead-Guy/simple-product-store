import { useEffect } from "react";
import cartIcon from "../../../assets/icons/icon-cart.svg";

type Cart = HTMLElement | null;

function CartButton() {
  let cartElement: Cart;

  useEffect(() => {
    cartElement = document.getElementById("cart");
  });

  const findElement = () => {
    cartElement?.classList.toggle("hidden");
  };

  return (
    <button className="relative" aria-label="Cart" onClick={findElement}>
      <img src={cartIcon.src} alt="" />
      <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        3
      </span>
    </button>
  );
}

export default CartButton;
