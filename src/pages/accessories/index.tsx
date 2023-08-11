/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProductRequest, getCategoryRequest } from '../../redux/actions';
import { RootState } from '../../redux/store';
import Product from '../../layouts/template_product_grid/Product';

function Accessories() {
  const dispatch = useAppDispatch();
  const [params, setParams] = useState({
    keySearch: String,
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
        category: [],
      })
    );
    dispatch(
      getCategoryRequest({
        keySearch: 'HW',
      })
    );
  }, []);

  const ProductReducer = useAppSelector(
    (state: RootState) => state.ProductReducer
  );
  const CategoryReducer = useAppSelector(
    (state: RootState) => state.CategoryReducer
  );

  const { data, isLoading } = ProductReducer;
  const categoryList = CategoryReducer.data;
  const categoryLoading = CategoryReducer.isLoading;

  return (
    <div>
      <Product
        data={data}
        isloading={isLoading}
        categoryFilter={categoryList}
      />
    </div>
  );
}

export default Accessories;
