// src/components/CartDisplay.tsx
import { useCartStore } from "../../stores/cartStore";
import closeIcon from "../../assets/icons/icon-close.svg";
import removeIcon from "../../assets/icons/icon-delete.svg";

export default function CartDisplay() {
  const { isOpen, items, removeItem, toggleCart } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed top-16 right-0 bg-transparent shadow-lg h-screen p-4 text-gray-700 z-10 w-full">
      <div className="p-6 bg-white rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center pr-2 pb-4">
          <h2 className="text-lg font-bold font-kumbh">Cart</h2>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700"
          >
            <img src={closeIcon.src} alt="Close" className="w-4 h-4" />
          </button>
        </div>

        <hr className="absolute w-full left-0 opacity-15" />

        <div className="mt-6">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 font-kumbh py-16">
              Your cart is empty
            </p>
          ) : (
            items.map((item) => (
              <>
                <div
                  key={item.id}
                  className="flex items-center justify-between pb-2"
                >
                  <div className="flex items-center gap-4 justify-between">
                    <div className="max-w-1/6 rounded-lg">
                      <img src={item.image} alt="" className="rounded-md" />
                    </div>
                    <div className="flex flex-col gap-2 grow-1">
                      <h3 className="font-normal font-kumbh text-gray-500 ">
                        {item.name}
                      </h3>
                      <p>
                        ${item.price} x {item.quantity}{" "}
                        <span className="font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <img
                          src={removeIcon.src}
                          alt="Remove"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="bg-primary p-4 rounded-md w-full hover:bg-opacity-80 cursor-pointer font-bold">
                    Checkout
                  </button>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
