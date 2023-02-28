import './Register.scss';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { DebounceInput } from 'react-debounce-input';
export default function Register() {

    return (
        <div className="wapper">
      <div className="wapper-child">
        <div className="sign-in">
          <h2>ĐĂNG KÝ</h2>
          <hr />
            <div className="contain">
              <button className="user">
                <UserOutlined />
              </button>
              <input className="email"/>
            </div>
            <div className="contain">
              <button className="lock">
                <LockOutlined />
              </button>
              <input className="password"/>
            </div>
            <span className="forgot-password">Quên mật khẩu?</span>
            <div className="form-footer">
              <a className="form-btn">Tạo tài khoản mới</a>
              <a className="wrap">
                <button className="form-btn">
                  Đăng nhập
                </button>
              </a>
            </div>
          
        </div>
      </div>
    </div>
    )
}