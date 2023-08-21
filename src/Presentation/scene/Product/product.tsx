import React from 'react';
import { ProductGet } from '../../../Domain/UseCases/ProductService';
import { useStore } from '../../../Service';
import { DATA_STATE } from '../../../Service/Utils/dataState';
import Loader from '../../components/Loader/Loader';
import ProductComponent from '../../components/Product';
import { Product as ProductModel } from '../../../Domain/Models/Product';

export default function Product() {
  const loading = useStore((state) => state.loading);
  const productList = useStore((state) => state.product);
  const setProductStore = useStore((state) => state.setProduct);

  React.useEffect(() => {
    ProductGet().then((product) => {
      setProductStore(product);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
