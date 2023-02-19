import { HashRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Browse from './layouts/browse/Browse';
import SOYULI_ROUTES from './routes/route';
import ProtectedRoute from './routes/ProtectedRoute';

export  default function App() {
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
      <Header onSearch={onSearch} onChange={onChange} value={value} onSeclect={onSelect}/>
      {/* <Login></Login> */}
      <Browse/>
      <Footer/>
    </div>
  );
}



