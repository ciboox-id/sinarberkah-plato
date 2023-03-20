import React from 'react';

const carts = [
  {
    name: "The Catalyzer",
    image: "./images/12.jpg",
    category: "CATEGORY",
    price: "$16.00",
  },
  {
    name: "Shooting Stars",
    image: "./images/15.jpg",
    category: "CATEGORY",
    price: "$21.15",
  },
  {
    name: "Neptune",
    image: "./images/16.jpg",
    category: "CATEGORY",
    price: "$12.00",
  },
  {
    name: "The 400 Blows",
    image: "./images/18.jpg",
    category: "CATEGORY",
    price: "$18.40",
  },
];

const Cart = () => {
  return (
    <section className="px-14">
      <div className="container px-5 py-24 mx-auto">
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1" />
              <button
                class="relative z-[2] flex items-center rounded-r bg-main-color px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-main-color active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {carts.map((cart, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={cart.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{cart.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{cart.name}</h2>
                <p className="mt-1">{cart.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
