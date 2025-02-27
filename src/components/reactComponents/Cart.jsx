import { useState } from "react";

const Cart = () => {
  let testElement = {
    thumbnail: "/src/assets/images/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers",
    price: 125,
    quantity: 3,
  };

  return (
    <div
      className="fixed z-10 w-full min-h-1/6 h-auto mx-auto font-kumbh"
      id="cart"
    >
      <div className="m-4 bg-white rounded-lg h-full">
        <div className="p-4 flex flex-col h-full">
          <header className="p-2 pb-6 ">
            <h3 className="text-lg font-semibold">Cart</h3>
          </header>
          <hr className="border-b-2 opacity-5" />
          <section className="flex items-center justify-center flex-col h-full">
            {testElement ? (
              <div className="w-full px-4 gap-4 flex flex-col justify-between">
                <article className="flex items-center gap-2">
                  <div className="grow-1">
                    <img src={testElement.thumbnail} alt="" />
                  </div>
                  <div className="grow-1">items</div>
                </article>
                <button className="w-full bg-primary p-4 rounded-lg text-gray-900 font-semibold text-lg">
                  Checkout
                </button>
              </div>
            ) : (
              <article className="text-gray-500 font-semibold">
                Your Cart is empty.
              </article>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
