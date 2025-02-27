import Counter from "./Counter";
import iconCart from "../../assets/icons/icon-cart.svg";
import { useState } from "react";

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Logic to add items to cart
    console.log(`Added ${quantity} items to cart`);
  };

  return (
    <div className="flex items-center justify-between gap-4 w-full flex-col">
      <Counter increase={increase} decrease={decrease} quantity={quantity} />

      <button
        onClick={handleAddToCart}
        className="w-full bg-primary text-gray-800 font-bold py-4 rounded-lg flex items-center justify-center gap-3 cursor-pointer"
      >
        <img src={iconCart.src} alt="Add to cart" />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
