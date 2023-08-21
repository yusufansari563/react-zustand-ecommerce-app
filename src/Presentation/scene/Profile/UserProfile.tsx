import React, { useState } from 'react';
import { useStore } from '../../../Service';
import { useNavigate } from 'react-router-dom';
import useNotification from '../../Hooks/useNotification';

function UserProfile() {
  const loggedUser = useStore((state) => state.login);
  const setLogin = useStore((state) => state.Login);
  const [id, setId] = useState(loggedUser.id);
  const [pass, setPass] = useState(loggedUser.password);
  const [notification, setNotification] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <form className='space-y-4 md:space-y-6 w-3/4' action='#'>
        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={`${id}`}
            onChange={(e) => {
              setId(e.target.value);
            }}
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='name@company.com'
            required={true}
          />
        </div>
        <div>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='••••••••'
            value={`${pass}`}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required={true}
          />
        </div>

        <input
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            setLogin({
              id: id,
              password: pass,
            }).then(() => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              setNotification(true);
              setTimeout(() => {
                setNotification(false);
              }, 2000);
            });
          }}
          className='w-min float-right dark:bg-gray-700 dark:text-white  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
          value={'Save'}
        />

        {notification && (
          <div
            id='toast-default'
            className='absolute bottom-24 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'
            role='alert'
          >
            <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200'>
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z'
                />
              </svg>
              <span className='sr-only'>Fire icon</span>
            </div>
            <div className='ml-3 text-sm font-normal'>Profile is updated!</div>
            <button
              type='button'
              className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
              data-dismiss-target='#toast-default'
              aria-label='Close'
            >
              <span className='sr-only'>Close</span>
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
            </button>
          </div>
        )}
      </form>
    </>
  );
}

export default UserProfile;
