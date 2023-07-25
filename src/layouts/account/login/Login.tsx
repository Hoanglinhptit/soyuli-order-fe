/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import {
  UserOutlined,
  LockOutlined,
  FacebookFilled,
  GoogleOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { loginRequest } from '../../../redux/actions';

export default function Login() {
  const [account, setAccount] = React.useState({
    email: '',
    passWord: '',
  });
  const [show, setShow] = React.useState<boolean>(false);
  const auth = useAppSelector((state: RootState) => state.AuthReducer);
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  //   function handleGoBack() {
  //     navigate(-1);
  //   }
  React.useEffect(() => {
    // neu co trang truoc thi goBack neu khong co return trang chu
    // auth.data !== null && (navigate('/home', { replace: true }) || navigate(-1))
    if (auth.data !== null) {
      const result = navigate('/home', { replace: true });
      if (result === void 0) {
        navigate(-1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.data]);
  return (
    <div className="bg-[#e9e2d4] flex w-full h-[100vh] justify-center items-center">
      <div className="bg-[#fff] text-center w-[460px] shadow-[0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)] rounded-md">
        <div className="my-4">
          <h2 className="text-2xl font-extrabold">SIGN IN</h2>
          <hr />

          <div className="flex items-center justify-center relative my-7 mx-[10px] ">
            <button className="py-[14px] px-6 bg-[#f4f3f1] text-[#000] rounded-[6px] hover:text-[#fff] ">
              <UserOutlined />
            </button>
            <DebounceInput
              debounceTimeout={5000}
              className="w-[90%] py-auto outline-none text-lg border-solid-[0.5px #c8c9ca] mx-3 "
              placeholder="Email"
              onChange={(e) => {
                setAccount({
                  ...account,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex items-center justify-center relative  my-7  mx-[10px]">
            <button className="py-[14px] px-6 bg-[#f4f3f1] text-[#000] rounded-[6px] hover:text-[#fff]">
              <LockOutlined />
            </button>
            <DebounceInput
              className="w-[90%] py-auto outline-none text-lg border-solid-[0.5px #c8c9ca] mx-3"
              type={show === true ? 'text' : 'password'}
              placeholder="****"
              debounceTimeout={5000}
              onChange={(e) => {
                setAccount({
                  ...account,
                  passWord: e.target.value,
                });
              }}
            />
          </div>
          <span className="ml-[286px] cursor-pointer">Forgot passwords ?</span>
          <div className="flex justify-around my-[40px] mx-[6%] mb-[24px]">
            <a
              href=""
              className="bg-[#f4f3f1] border-none py-[11px] px-[22px] text-[#000] font-medium rounded-md text-[1.2rem] no-underline hover:text-[#fff]"
            >
              SIGN UP
            </a>
            <a className="">
              <button
                className="bg-[#f4f3f1] border-none py-[11px] px-[22px] text-[#000] font-medium rounded-md text-[1.2rem] no-underline hover:text-[#fff]"
                onClick={() => {
                  dispatch(loginRequest(account));
                }}
              >
                SIGN IN
              </button>
            </a>
          </div>
        </div>
        <div className="flex xl:h-18 justify-evenly mb-7">
          {' '}
          <a href="http://" className="h-full text-lg">
            <FacebookFilled className="text-3xl" />
          </a>
          <a href="http://" className="h-full text-lg">
            <GoogleOutlined className="text-3xl" />
          </a>
          <a href="http://" className="h-full text-lg">
            <InstagramOutlined className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
