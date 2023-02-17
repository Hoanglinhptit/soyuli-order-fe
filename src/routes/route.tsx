import Accessories from '../pages/accessories';
import Decorations from '../pages/decorations';
import Funiture from '../pages/furniture';
import Home from '../pages/home';
import Shoes from '../pages/shoes';
import Clothes from '../pages/clothes';

const SOYULI_ROUTES = [
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
    path: '/Request-Management/Overtime-Request',
    element: <div>hi</div>,
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
