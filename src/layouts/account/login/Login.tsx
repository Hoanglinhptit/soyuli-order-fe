import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.scss';

export default function Login() {
    
  return <div className="wapper">
  <div className="wapper-child">
      <div className="sign-in">
          <h2>ĐĂNG NHẬP</h2>
          <hr />
          <form>
              <div className="contain">
                  <button className="user">
                        <UserOutlined />
                  </button>
                  <input className="email" type="email" placeholder='Email'/>
              </div>
              <div className="contain">
                  <button className="lock">
                        <LockOutlined />
                  </button>
                  <input className="password" placeholder='Mật khẩu'/>
              </div>
              <span className="forgot-password">Quên mật khẩu?</span>
              <div className="form-footer">
                <a className="form-btn">Tạo tài khoản mới</a>
                <a>
                    <button className="form-btn">Đăng nhập</button>
                </a>
              </div>
          </form>
      </div>
  </div>
</div>;
}
