import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";
import { remove } from '../redux/slices/CartSlice';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex items-center justify-between border-b pb-4 mb-4 m-10">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
        <div>
          <h1 className="font-semibold text-lg">{item.title}</h1>
          <p className="text-gray-600 text-sm line-clamp-2 w-60">{item.description}</p>
          <p className="text-green-600 font-bold text-lg">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <button onClick={removeFromCart} className="bg-red-100 p-2 rounded-full hover:bg-red-200 transition">
        <MdDelete className="text-red-600 text-xl" />
      </button>
    </div>
  );
};

export default CartItem;