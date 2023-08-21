import React from 'react';
import { useStore } from '../../../Service';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
  const logout = useStore((state) => state.Logout);
  const loggedUser = useStore((state) => state.login);
  
  useAuth();

  return (
    <>
      <header className={'fixed w-full top-0 z-20'}>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 h-16'>
          <div className='flex justify-between'>
            <div className='flex items-center w-auto'>
              <div
                onClick={() => logout()}
                className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
              >
                Log Out
              </div>

            </div>
            <div
              className='flex items-center w-auto'
            >
              <ul className='flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                  <div
                   
                    className='text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Hi, There {loggedUser.id}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
