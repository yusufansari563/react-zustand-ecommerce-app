import React from 'react';
import { useStore } from '../../Service';
import { Product } from '../../Domain/Models/Product';
import { Link } from 'react-router-dom';

export default function CartProduct(props: Product) {
  const [addSameProdInCart, removeSameProdInCart] = useStore((state) => [
    state.addSameProdInCart,
    state.removeSameProdInCart,
  ]);

  return (
    <>
      <div className='mb-3 w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className='mb-4'>
          <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
            List of Products
          </h5>
        </div>
        <div className='flow-root'>
          <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
            <li className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <Link to={`/product/${props.id}`}>
                  <div className='flex-shrink-0'>
                    <img
                      className='w-16 h-16 rounded-full'
                      alt={props.title}
                      src={props.image}
                    />
                  </div>
                </Link>
                <div className='flex-1 min-w-0'>
                  <Link to={`/product/${props.id}`}>
                    <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                      {props.title}
                    </p>
                    <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                      {props.category}
                    </p>
                  </Link>
                  <div className='mt-2 flex items-center gap-3'>
                    <button
                      title='Add New'
                      className='group cursor-pointer hover:rotate-90 active:scale-100 duration-200 w-8 h-8 dark:text-white'
                      onClick={() => addSameProdInCart(props)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='stroke-white fill-none group-active:fill-slate-600 duration-200'
                      >
                        <path
                          d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
                          strokeWidth='1.5'
                        ></path>
                        <path d='M8 12H16' strokeWidth='1.5'></path>
                        <path d='M12 16V8' strokeWidth='1.5'></path>
                      </svg>
                    </button>
                    <button
                      title='Add New'
                      className='group cursor-pointer hover:rotate-180 active:scale-100 duration-200 w-8 h-8 dark:text-white'
                      onClick={() => removeSameProdInCart(props)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        className='stroke-white fill-none group-active:fill-slate-600 duration-200'
                      >
                        <path
                          d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z'
                          strokeWidth='1.5'
                        ></path>
                        <path d='M8 12H16' strokeWidth='1.5'></path>
                      </svg>
                    </button>

                    <div className='font-serif text-white font-bold ml-5'>
                      {props.total}
                    </div>
                  </div>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {props.price}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
