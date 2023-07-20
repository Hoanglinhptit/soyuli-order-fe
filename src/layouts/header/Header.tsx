import {
  ShoppingOutlined,
  SearchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';
import { Button, AutoComplete, Input, Breadcrumb } from 'antd';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import HeaderLink from './HeaderLink';
import Logo from '../../assets/logo/Logo.svg';

// interface PropsType = {
//   textSearch : String;
//   handleSearch :
// }
interface Props {
  value: string;
  onSearch: (query: string) => void;
  onSeclect: (query: string) => void;
  onChange: (query: string) => void;
}
export default function Header(props: Props) {
  const { onSearch, onChange, onSeclect, value } = props;
  const isAuth = localStorage.getItem('token');
  const auth = useAppSelector((state: RootState) => state.AuthReducer);

  const breadcrumbNameMap: Record<string, string> = {
    '/products': 'Products',
    '/news': 'News',
    '/products/shoes': 'Shoes',
    '/products/accessories': 'Accessories',
    '/products/clothes': 'Clothes',
    '/products/houseware': 'Houseware',
    '/products/decorations': 'Decorations',
    '/products/funiture': 'Funiture',
    '/products/detail': 'Detail',
  };
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div className="h-[130px] w-full mb-14">
      <div className="my-0 mx-auto max-w-full 2xl:w-[1340px]">
        <nav className="flex justify-between h-20 ">
          <div className="w-52 flex justify-center items-center mt-2 ">
            <a href="/" className="no-underline text-transparent">
              <img src={Logo} alt="Logo" className="w-52 h-16" />
            </a>
          </div>

          <div className="2xl:w-[580px] ml-3 flex justify-center items-center text-center ">
            <div className="flex w-full ">
              <AutoComplete
                value={value}
                onSearch={onSearch}
                onSelect={onSeclect}
                onChange={onChange}
                className="w-full"
              >
                <Input className="w-full" placeholder="Searching" />
              </AutoComplete>
              <Button className="ml-2 bg-[#d6d3cd]" onClick={() => onSearch}>
                <SearchOutlined />
              </Button>
            </div>
          </div>
          <div className="items-center w-[440px] h-full ">
            <ul className="flex list-none pl-3 h-full justify-around">
              <li className="no-underline text-transparent flex list-none items-center ">
                <HeaderLink href="/news">News</HeaderLink>
              </li>
              <li className="no-underline text-transparent flex list-none items-center ">
                <HeaderLink href="/news">About</HeaderLink>
              </li>
              <li className="no-underline text-transparent flex list-none items-center ">
                <HeaderLink href="/news">Help</HeaderLink>
              </li>
              <li className="no-underline text-transparent flex list-none items-center ">
                <HeaderLink href="/news" className="mt-[-7px]">
                  <ShoppingOutlined style={{ fontSize: '1.3rem' }} />
                </HeaderLink>
              </li>
              <li>
                {!isAuth ? (
                  <ul className="flex justify-evenly w-48 h-full items-center text-[1.3rem] font-light">
                    <li>
                      <HeaderLink href="/news">Login</HeaderLink>
                    </li>
                    <li>
                      <HeaderLink href="/news">Sign Up</HeaderLink>
                    </li>
                  </ul>
                ) : (
                  <div className="w-full h-full flex justify-between items-center">
                    <span className="">Hi,Linh!</span>
                    <Button
                      style={{ border: 'none' }}
                      onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload();
                      }}
                    >
                      <LogoutOutlined style={{ fontSize: '1.2rem' }} />
                    </Button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="bg-[#d6d3cd] w-full my-0 mx-auto h-10">
        <div className="my-0 mx-auto max-w-full 2xl:w-[1340px]">
          <ul className="flex justify-evenly items-center text-[1.3rem] h-10 font-normal ">
            <li className="">
              <HeaderLink href="/news">Shoes</HeaderLink>
            </li>
            <li className="">
              <HeaderLink href="/products/accessories">Accessories</HeaderLink>
            </li>
            <li className="">
              <HeaderLink href="/news">Clothes</HeaderLink>
            </li>
            <li className="">
              <HeaderLink href="/news">Houseware</HeaderLink>
            </li>
            <li className="">
              <HeaderLink href="/news">Decorations</HeaderLink>
            </li>
            <li className="">
              <HeaderLink href="/news">Furniture</HeaderLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="my-0 mx-auto 2xl:w-[1100px]">
        {' '}
        <Breadcrumb style={{ fontSize: '1rem', marginTop: '16px' }}>
          {breadcrumbItems}
        </Breadcrumb>
      </div>
    </div>
  );
}
