/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import './Shoes.scss';
import { DownOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getProductRequest } from '../../redux/actions';
import { RootState } from '../../redux/store';


export default function Shoes() {
    // const onChange = (e) => {
    //     console.log(`checked! = ${e.target.checked}`);
    // }
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProductRequest({ pageIndex: 1, limit: 10, type: 'home' }))
    }, [])
    const listProducts = useAppSelector((state: RootState) => state.ProductReducer);
    console.log("Products", listProducts);
    
    return <div className='shoes'>
    <div className='shoes-wapper'>
        <h1 className='shoes-title'>Sneakers</h1>
        <span className='shoes-about'>Buy and Sell Shoes on StockX. Every item is StockX Verified.</span>
    </div>
    <div className='product'>
        <div className='product-navs'>
            <a className='nav'>Sneakers</a>
            <a className='nav'>Shoes</a>
            <a className='nav'>Apparel</a>
            <a className='nav'>Electronics</a>
            <a className='nav'>Trading Cards</a>
            <a className='nav'>Collectibles</a>
            <a className='nav'>Accessories</a>
            <br/>
            <h1 className='nav'>Size types</h1>
            <Checkbox>Men</Checkbox><span/> 
            <Checkbox>Women</Checkbox><span/> 
            <Checkbox>Child</Checkbox><span/> 
            <Checkbox>Preschool</Checkbox><span/> 
            <Checkbox>Toddler</Checkbox><span/> 
            <Checkbox>Infant</Checkbox><span/> 
            <br/>
            <h1 className='nav'>Sizes</h1>
            <div>
                <button className='shoes-size'>1</button>
                <button className='shoes-size'>1.5</button>
                <button className='shoes-size'>2</button>
                <button className='shoes-size'>2.5</button>
                <button className='shoes-size'>3</button>
                <button className='shoes-size'>3.5</button>
                <button className='shoes-size'>4</button>
                <button className='shoes-size'>4.5</button>
                <button className='shoes-size'>5</button>
                
            </div>
            
        </div>
        <div className='product-list'>
            <div className='product-tab'>
                <div className='product-btn'>Sort By: Featured <DownOutlined /></div>
            </div>
            <div className='product-shoes'>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
                <div className='shoe'>
                    <div className='shoe-img'>
                        <img src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-85-Black-White-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1675762190&q=57" alt="" />
                    </div>
                    <h1>Jordan 1 Retro High 85 Black White (2023)</h1>
                    <p className='shoe-require'>Lowest Ask</p>
                    <p className='shoe-price'>$268</p>
                </div>
            </div>
        </div>
    </div>
  </div>;
}
