import Counter from "./Counter";
import iconCart from "../../assets/icons/icon-cart.svg";
import { useState } from "react";
import { useCartStore } from "../../stores/cartStore";
import product from "../../constants/products/properties";

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useCartStore();

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const newProduct = {
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.image,
  };

  return (
    <div className="flex items-center justify-between gap-4 w-full flex-col">
      <Counter increase={increase} decrease={decrease} quantity={quantity} />

      <button
        onClick={() => addItem(newProduct, quantity)}
        className="w-full bg-primary text-gray-800 font-bold py-4 rounded-lg flex items-center justify-center gap-3 cursor-pointer"
      >
        <img src={iconCart.src} alt="Add to cart" />
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
