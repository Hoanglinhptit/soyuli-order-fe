/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProductRequest } from '../../redux/actions';
import { RootState } from '../../redux/store';
import Product from '../../layouts/template_product_grid/Product';

function Accessories() {
  const dispatch = useAppDispatch();
  const [params, setParams] = useState({
    keySearch: String,
    parentCategory: String,
    pageIndex: Number,
    limit: Number,
    type: String,
  });
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

  const { data } = ProductReducer;

  return (
    <div>
      <Product data={data} />
    </div>
  );
}

export default Accessories;
