import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      {cart.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-96 flex flex-col justify-between">
            <div> 
            <h2 className="text-green-600 font-bold text-lg">YOUR CART</h2>
            <h3 className="text-2xl font-bold mb-4">SUMMARY</h3>
            <p className="text-lg font-semibold">Total Items: {cart.length}</p>
            </div>

            <div>
            <p className="text-xl font-bold mt-2">Total Amount: <span className="text-green-600">${totalAmount.toFixed(2)}</span></p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-5 h-screen -mt-10">
          <h1 className="text-lg font-semibold">Cart Empty!!</h1>
          <NavLink to="/">
            <button className="bg-green-600 text-white uppercase p-2 w-40 font-semibold rounded-md hover:scale-110 transition duration-300 ease-in">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
