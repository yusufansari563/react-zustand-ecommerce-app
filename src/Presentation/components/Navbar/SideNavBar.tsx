import React from 'react';
import { Link } from 'react-router-dom';

function SideNavBar() {
  return (
    <div className='h-auto dark:bg-gray-800 w-1/5 side_nav-bar hidden md:block'>
      <ul className={'px-3 dark:text-white'}>
        <Link to={'/'}>
          <li className={'font-semibold dark:text-white font-mono py-1 my-1'}>
            Home
          </li>
        </Link>
        <Link to={'/chat'}>
          <li className={'font-semibold dark:text-white font-mono py-1 my-1'}>
            Chat
          </li>
        </Link>
        <Link to={'/user'}>
          <li className={'font-semibold dark:text-white font-mono py-1 my-1'}>
            Profile
          </li>
        </Link>
        <Link to={'/cart'}>
          <li className={'font-semibold dark:text-white font-mono py-1 my-1'}>
            Cart
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideNavBar;
