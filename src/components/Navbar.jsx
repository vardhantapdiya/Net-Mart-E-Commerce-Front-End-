import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart} = useSelector((state)=>state)
  return (
    <div className=''>
      <nav className='flex flex-row justify-between items-center h-20 max-w-5xl mx-auto'>
        <NavLink to="/">
          <div className='ml-5'>
            <img src="https://icon-library.com/images/e-commerce-icon/e-commerce-icon-12.jpg" alt="" className='w-[50px] h-[50px]' />
          </div>
        </NavLink>
        <h1 className='text-white font-bold text-3xl'>
        {/* नेट से लेलो.com */}
        Net Mart
        </h1>
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className='relative'>
              <FaCartShopping className='text-2xl'/>
              {
                cart.length > 0 && 
                <span className='absolute
                -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center
                animate-bounce rounded-full text-white items-center'>{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
