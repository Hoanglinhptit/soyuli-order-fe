/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import SOYULI_ROUTES from './routes/route';
import ProtectedRoute from './routes/ProtectedRoute';
import Payment from './pages/payment';
import News from './pages/news';
import ShoppingCard from './pages/shopping-card';

export const App: React.FC = () => {
  const [cond, setCond] = useState<boolean>(
    window.location.pathname === '/auth/login' ||
      window.location.pathname === '/register'
  );
  const location = useLocation();
  useEffect(() => {
    const cond =
      location.pathname === '/auth/login' || location.pathname === '/register';
    cond ? setCond(true) : setCond(false);
  }, [location]);
  const [value, setValue] = useState<string>('');
  const onSelect = (value: string) => {
    setValue(value);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  const onSearch = () => {
    console.log(1);
  };
  return (
    <div>
      {!cond && (
        <Header
          onSearch={onSearch}
          onChange={onChange}
          value={value}
          onSeclect={onSelect}
        />
      )}

      <div className="">
        <Routes>
          {SOYULI_ROUTES.map((e) => (
            <Route key={e.path} path={e.path} element={e.element} />
          ))}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/payment" element={<News />} />
            <Route path="/news" element={<Payment />} />
            <Route path="/shopping-card" element={<ShoppingCard />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
