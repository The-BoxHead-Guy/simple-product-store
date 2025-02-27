import { useState } from "react";

const Cart = () => {
  return (
    <div className="fixed z-10 w-full min-h-1/6 h-64 max-h-1/3 mx-auto font-kumbh">
      <div className="m-4 bg-white rounded-lg h-full">
        <div className="p-4 flex flex-col h-full">
          <header className="p-2 pb-6 ">
            <h3 className="text-lg font-semibold">Cart</h3>
          </header>
          <hr className="border-b-2 opacity-5" />
          <section className="flex items-center justify-center h-full">
            <article className="text-gray-500 font-semibold">
              Your Cart is empty.
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
