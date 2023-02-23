import Accessories from '../pages/accessories';
import Decorations from '../pages/decorations';
import Funiture from '../pages/furniture';
import Home from '../pages/home';
import Shoes from '../pages/shoes';
import Clothes from '../pages/clothes';
import HouseWare from '../pages/houseware';
import Login from '../layouts/account/login/Login';
import Detail from '../layouts/template-detail-product'

const SOYULI_ROUTES = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/products/detail',
    element: <Detail/>,
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
