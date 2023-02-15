import { useState } from 'react';
import { ShoppingOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, AutoComplete, Input } from 'antd';
import './Header.scss';
import Logo from '../../assets/logo/Logo.svg';

// interface PropsType = {
//   textSearch : String;
//   handleSearch :
// }
interface Props {
  value : string;
  onSearch: () => void;
  onSeclect: (query: string) => void;
  onChange: (query: string) => void;
}
export default function Header(props:Props) {
  const {onSearch,onChange,onSeclect,value}= props;
  const [isLogin, setIsLogin] = useState<boolean>(false);
 
  return (
    <div className="header-container">
      <div className="header-grid">
        <nav className="header_navbar--container">
          <div className="header-logo">
            <a href="/" className="header-item-link">
              <img src={Logo} alt="Logo" className="header-logo-img" />
            </a>
          </div>

          <div className="header-navbar-search">
            <div className="autocomplete-container">
              <AutoComplete
                value={value}
                onSearch={onSearch}
                onSelect={onSeclect}
                onChange={onChange}
                
              >
                <Input className="search-input" placeholder="Searching"/>
              </AutoComplete>
              <Button className="search-button" onClick={()=>onSearch}>
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="header-navbar_list-wrapper">
            <ul className="header-navbar-list">
              <li className="header-navbar-item">
                <a href="/" className="header-item-link">
                  Notification
                </a>
              </li>
              <li className="header-navbar-item">
                <a href="/" className="header-item-link">
                  About
                </a>
              </li>
              <li className="header-navbar-item">
                <a href="/" className="header-item-link">
                  Help
                </a>
              </li>
              <li className="header-navbar-item shoping-card">
                <a href="/" className="header-item-link">
                  <ShoppingOutlined style={{ fontSize: '1.3rem' }} />
                </a>
              </li>
              <li className="header-navbar-item-authen">
                {!isLogin ? (
                  <ul className="header-navbar--authen">
                    <li>
                      <a href="/" className="header-item-link">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="/" className="header-item-link">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                ) : (
                  <span className="header-navbar--user">
                    Xin chào Lê Hoàng Linh !
                  </span>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="header_bread-scrum">
        <div className="header-grid">
          <ul className="header_bread-scrum-list">
            <li className="header_bread-scrum-item">
              <a href="/" className="header-item-link">
                Shoes
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/" className="header-item-link">
                Accessories
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/" className="header-item-link">
                Clothes
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/" className="header-item-link">
                Houseware
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/" className="header-item-link">
                Decorations
              </a>
            </li>
            <li className="header_bread-scrum-item">
              <a href="/" className="header-item-link">
                Furniture
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
