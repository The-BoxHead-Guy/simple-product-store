import { useEffect } from "react";
import cartIcon from "../../../assets/icons/icon-cart.svg";
import { useCartStore } from "../../../stores/cartStore";

type Cart = HTMLElement | null;

function CartButton() {
  const { toggleCart, totalItems } = useCartStore();
  let cartElement: Cart;

  useEffect(() => {
    cartElement = document.getElementById("cart");
  });

  return (
    <button className="relative" aria-label="Cart" onClick={toggleCart}>
      <img src={cartIcon.src} alt="" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
}

export default CartButton;
