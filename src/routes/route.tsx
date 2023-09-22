/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactComponentElement, ReactNode } from 'react';
import Accessories from '../pages/accessories';
import Decorations from '../pages/decorations';
import Funiture from '../pages/furniture';
import Home from '../pages/home';
import Shoes from '../pages/shoes/Shoes';
import Clothes from '../pages/clothes';
import HouseWare from '../pages/houseware';
import Login from '../layouts/account/login/Login';
import DetailContainer from '../layouts/template-detail-product/DetailContainer';
import Products from '../pages/Products';
// import DetailContainer from '../layouts/template-detail-product/DetailContainer';

// const DetailContainer = React.lazy(()=> import'../layouts/template-detail-product/DetailContainer');
const DetailContainerLazy = React.lazy(() =>
  import('../layouts/template-detail-product/DetailContainer').then(() => ({
    default: DetailContainer,
  }))
);
const SOYULI_ROUTES: Array<{
  path: string;
  element: ReactNode;
}> = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/products/detail/:id',
    element: <DetailContainerLazy />,
  },
  {
    path: '/products/accessories',
    element: <Accessories />,
  },
  {
    path: '/products/decorations',
    element: <Decorations />,
  },
  {
    path: '/products/funiture',
    element: <Funiture />,
  },
  {
    path: '/products/shoes',
    element: <Shoes />,
  },
  {
    path: '/products/houseware',
    element: <HouseWare />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/clothes',
    element: <Clothes />,
  },
];
export default SOYULI_ROUTES;
