import React from 'react';
import CartProduct from '../../components/CartProduct';
import Price from '../../components/Price';
import { useStore } from '../../../Service';
import { Product } from '../../../Domain/Models/Product';
import { Link } from 'react-router-dom';

interface items {
  item: any;
  index: number;
}

function Cart() {
  const getTotalPrice = useStore((state: any) => state.totalPrice);
  const getCart = useStore((state: any) => state.cart);
  return (
    <div className='w-full px-2'>
      <div className='flex justify-around items-start gap-4 flex-col md:flex-row'>
        <Price />
        <div className='flex flex-col w-full'>
          {getCart.map((item: Product, index: number) => {
            return <CartProduct key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
