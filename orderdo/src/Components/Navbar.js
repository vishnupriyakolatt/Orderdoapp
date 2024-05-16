import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logoapp from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar({ bg }) {
  const [showMenu, setShowMenu] = useState(false);
const navigate=useNavigate()
  const isLoggedIn = localStorage.getItem('grocerytoken');

  const toggleMobileNav = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('grocerytoken');
   navigate('/login'); 
  };

  return (
    <header
      className={`${
        bg ? 'bg-white py-2 lg:py-2' : 'bg-white'
      } fixed left-0 py-0 z-10 w-full transition-all duration-200 shadow-lg shadow-gray-500/40 `}
    >
      <div className='relative w-full max-w-[100] h-20 flex items-center justify-between pt-10 mx-auto px-10 shadow-lg shadow-gray-500/40 '>
        <div className='flex items-center'>
          <img src={logoapp} className='mt-[-10px] w-40 h-auto' alt='Logo' />
        </div>
        
        {!isLoggedIn ? (
          <Link to='/login'>
            <button
              type='button'
              className='text-white mt-[-20px] bg-black hover:bg-white hover:text-black border hidden md:block cursor-pointer focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 font-bold'
            >
              Login
            </button>
          </Link>
        ) : (
          <button
            type='button'
            className='text-white mt-[-20px] bg-black hover:bg-white hover:text-black border hidden md:block cursor-pointer focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 font-bold'
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

        <HiMenuAlt3
          size={30}
          className='block md:hidden cursor-pointer text-black mt-[-38px]'
          onClick={toggleMobileNav}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMenu ? '-top-[410px]' : 'top-0'
          } left-0 bg-white h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className='absolute top-5 right-5 cursor-pointer'
            onClick={() => setShowMenu(false)}
          />
        </div>
      </div>
      {showMenu && (
        <div className='mobile-nav-overlay' onClick={toggleMobileNav} />
      )}
    </header>
  );
}

export default Navbar;

