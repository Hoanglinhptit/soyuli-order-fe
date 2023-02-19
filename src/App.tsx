/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Browse from './layouts/browse/Browse';
import SOYULI_ROUTES from './routes/route';
import ProtectedRoute from './routes/ProtectedRoute';
import Payment from './pages/payment'

export  default function App() {
  const [cond, setCond] = useState<boolean>(window.location.pathname === "/login" || window.location.pathname === "/register");
    const location = useLocation();
    useEffect(() => {
        console.log("location: ", location)
        const cond = location.pathname === "/login" || location.pathname === "/register"
        cond ? setCond(true) : setCond(false)
    }, [location])
  const [value, setValue] = useState<string>('');
  const onSelect = (value: string) => {
    setValue(value);
  };
  const onChange = (data: string) => {
    
    setValue(data);
  }
  const onSearch = ()=>{
    console.log(1)
  }
  return (
    <div>
      <Helmet><title>Soyuli Order</title></Helmet>
     {!cond && <Header onSearch={onSearch} onChange={onChange} value={value} onSeclect={onSelect}/>} 
      {/* <Login></Login> */}
      <Routes>
      {
        SOYULI_ROUTES.map((e)=><Route path={e.path} element={e.element}/>)
      } 
      <ProtectedRoute path='/payment' component={Payment}/> 
      </Routes>
      <Browse/>
      
      <Footer/>
    </div>
  );
}



