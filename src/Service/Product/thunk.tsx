import React from 'react';
import { ProductGet } from '../../Domain/UseCases/ProductService';
import { useStore } from '../store';

export async function getProduct() {
  let product;
  try {
    product = await ProductGet();
    product.then((res: any) => res);
  } catch (error) {}
}
