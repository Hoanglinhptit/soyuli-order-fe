import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './Login.scss';
export default function Login() {
    const [type, setType] = useState("password")
    const [icon, setIcon] = useState("<EyeOutlined />")
    const [value, setValue] = useState()
    const handleToggle = () => {
        
        if(type === "password"){
            setType("text")
            setIcon("<EyeInvisibleOutlined />")
        }
        else {
            setType("password")
            setIcon("<EyeOutlined />")
        }
    }
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
                  {/* <input className="password" type={type} placeholder='Mật khẩu' onChange={(e) => setValue(e.target.value)}/> */}
                  {value && (
                      <span className="password__display" onClick={handleToggle}>
                          {/* <FontAwesomeIcon icon={icon}/> */}
                      </span>
                  )}
              </div>
              <span className="forgot-password">Quên mật khẩu?</span>
              <div className="form-footer">
                  {/* <Link className="form-btn" to="/register">Tạo tài khoản mới</Link>
                  <Link to="/">
                      <button className="form-btn">Đăng nhập</button>
                  </Link> */}
              </div>
          </form>
      </div>
  </div>
</div>;
}
