
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Header from './layouts/header/Header';


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
    </div>
  );
}



