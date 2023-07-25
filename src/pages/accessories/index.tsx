/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProductRequest } from '../../redux/actions';
import { RootState } from '../../redux/store';
import Product from '../../layouts/template_product_grid/Product';

function Accessories() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getProductRequest({
        pageIndex: 1,
        limit: 10,
        parentCategory: 'Houseware',
        type: '',
        keySearch: 'Tao',
      })
    );
  }, []);
  const ProductReducer = useAppSelector(
    (state: RootState) => state.ProductReducer
  );
  console.log('Products', ProductReducer);
  const { data } = ProductReducer;
  console.log('data ??', data);

  return (
    <div>
      <Product data={data} />
    </div>
  );
}

export default Accessories;
