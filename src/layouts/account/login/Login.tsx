/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { loginRequest } from '../../../redux/actions';

import './Login.scss';

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
    <div className="bg-[#f0f2f5] flex w-full h-[100vh] justify-center items-center">
      <div className="bg-[#fff] text-center w-[460px] shadow-[0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)] rounded-md">
        <div className="mt-4">
          <h2>ĐĂNG NHẬP</h2>
          <hr />

          <div className="flex items-center justify-center relative my-0 mx-[6%] ">
            <button className="py-[14px] px-6 bg-[#d6d3cd] text-[#000] rounded-[6px] hover:text-[#fff] ">
              <UserOutlined />
            </button>
            <DebounceInput
              debounceTimeout={5000}
              className="w-full pt-[12px] pb-[50px] pl-[12px] pr-[12px] outline-none text-lg border-solid-[0.5px #c8c9ca] "
              placeholder="Email"
              onChange={(e) => {
                setAccount({
                  ...account,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex items-center justify-center relative my-0 mx-[6%]">
            <button className="py-[14px] px-6 bg-[#d6d3cd] text-[#000] rounded-[6px] hover:text-[#fff]">
              <LockOutlined />
            </button>
            <DebounceInput
              className="w-full pt-[12px] pb-[50px] pl-[12px] pr-[12px] outline-none text-lg border-solid-[0.5px #c8c9ca]"
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
          <span className="ml-[286px] cursor-pointer">Quên mật khẩu?</span>
          <div className="flex justify-between my-[40px] mx-[6%] mb-[24px]">
            <a className="bg-[#d6d3cd] border-none py-[11px] px-[22px] text-[#000] font-medium rounded-md text-[1.2rem] no-underline hover:text-[#fff]">
              Tạo tài khoản mới
            </a>
            <a className="">
              <button
                className="bg-[#d6d3cd] border-none py-[11px] px-[22px] text-[#000] font-medium rounded-md text-[1.2rem] no-underline hover:text-[#fff]"
                onClick={() => {
                  dispatch(loginRequest(account));
                }}
              >
                Đăng nhập
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
