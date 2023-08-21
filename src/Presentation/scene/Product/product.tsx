import React from 'react';
import { ProductGet } from '../../../Domain/UseCases/ProductService';
import { useStore } from '../../../Service';
import { DATA_STATE } from '../../../Service/Utils/dataState';
import Loader from '../../components/Loader/Loader';
import ProductComponent from '../../components/Product';
import Cart from '../Cart';
import { Product as ProductModel } from '../../../Domain/Models/Product';
import { Link } from 'react-router-dom';

interface items {
  item: ProductModel;
  index: number;
  rating: number;
  count: number;
}

export default function Product() {
  const loading = useStore((state) => state.loading);
  const productList = useStore((state) => state.product);
  const setProductStore = useStore((state) => state.setProduct);

  const getProduct = async () => {
    // const product = await ProductGet();
  };
  React.useEffect(() => {
    ProductGet().then((product) => {
      setProductStore(product);
    });
  }, []);

  switch (loading) {
    case DATA_STATE.FETCHING:
      return <Loader />;
    case DATA_STATE.INITIALIZED:
      return (
        <React.Fragment>
          <div className='flex justify-center flex-wrap gap-5'>
            {productList?.map((item: ProductModel, index: number) => (
                <ProductComponent  props={item} />
            ))}
          </div>
        </React.Fragment>
      );
    default:
      return <Loader />;
  }
}
