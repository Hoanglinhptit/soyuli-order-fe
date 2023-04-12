import './Register.scss';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

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
              <input className="email" placeholder='Email' type="email"/>
            </div>
            <div className="contain">
              <button className="lock">
                <LockOutlined />
              </button>
              <input className="password" placeholder='Mật khẩu' type="password"/>
            </div>
            <div className="contain">
              <button className="lock">
                <LockOutlined />
              </button>
              <input className="password" placeholder='Nhập lại mật khẩu' type="password"/>
            </div>
            <span className="forgot-password">Quên mật khẩu?</span>
            <div className="form-footer">
              <button className="form-btn" >Đăng Ký</button>
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