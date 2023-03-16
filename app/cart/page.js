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
