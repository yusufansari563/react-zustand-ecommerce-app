import React from 'react';
import { useStore } from '../../Service';

interface props {
  price: number;
  total: number;
  props: any;
}

function Price() {
  const getCart = useStore((state) => state.cart);

  const priceCalculator = () => {
    const price = getCart.reduce((total, props: props) => {
      return total + Math.round(props.price * props.total);
    }, 0);
    return price;
  };
  return (
    <>
      <div className='w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 px-2'>
        <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
          Total price: 
        </h5>
        <div className='flex items-baseline text-gray-900 dark:text-white'>
          <span className='text-3xl font-semibold'>$</span>
          <span className='text-5xl font-extrabold tracking-tight'>{priceCalculator()}</span>
          
        </div>
        
        <button
          type='button'
          className='mt-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
        >
          Place Order
        </button>
      </div>

      {/* <div className='m-auto'>
      <span className='font-bold'>{priceCalculator()}</span>
    </div> */}
    </>
  );
}

export default Price;
