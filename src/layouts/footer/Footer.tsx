
import { Col, Row } from 'antd';
import { AndroidFilled, AppleFilled, FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import './Footer.scss';

export default function Footer() {
  return <div className='footer'>
    <div className='footer-wapper'>
      <h1 className='footer-title'>Soyuli.Access the Now.</h1>
      <div className='footer-shoe'>
        <Row>
          <Col span={4}>
            <p className='item-unique'>Air Jordan</p>
            <p className='item'>Air Jordan 1</p>
            <p className='item'>Air Jordan Release Dates</p>
            <p className='item'>Womens Jordans</p>
            <p className='item'>Air Jordan 11</p>
            <p className='item'>Air Jordan 4</p>
            <p className='item'>Jordan 1 Mid</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Yeezy</p>
            <p className='item'>Yeezy Boost 350</p>
            <p className='item'>Yeezy Boost 350 V2</p>
            <p className='item'>Yeezy Boost 700</p>
            <p className='item'>Yeezy Boots</p>
            <p className='item'>Yeezy Slides</p>
            <p className='item'>Yeezy Foam RNNR</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Popular Releases</p>
            <p className='item'>Lightning McQueen Crocs</p>
            <p className='item'>NikeCraft GPS Yellow</p>
            <p className='item'>Jordan 2 J Balvin</p>
            <p className='item'>Adidas Samba</p>
            <p className='item'>Jordan 1 Yellow Toe</p>
            <p className='item'>Converse Chuck Taylor</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Apparel</p>
            <p className='item'>Supreme</p>
            <p className='item'>Essentials</p>
            <p className='item'>Chrome Hearts</p>
            <p className='item'>Vlone</p>
            <p className='item'>Nike Tech Fleece</p>
            <p className='item'>Yeezy GAP</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Nike</p>
            <p className='item'>Nike Dunk</p>
            <p className='item'>Nike Blazer</p>
            <p className='item'>Nike Air Force 1</p>
            <p className='item'>Women's Air Force 1s</p>
            <p className='item'>Women's Nike Dunks</p>
            <p className='item'>Women's Nike Shoes</p>
          </Col>
          <Col span={4}>
            <p className='item-unique'>Sell</p>
            <p className='item'>Selling Guide</p>
            <p className='item'>Professional Tools</p>
            <p className='item'>Scout</p>
            <p className='item'>Developers</p>
          </Col>
        </Row>
      </div>
      <hr/>
      <div className='footer-about'>
        <div>
            <button className='footer-btn'>Vietnam | English | Currency</button>
        </div>
        <div>
            <p>Find Us on Social</p>
            <div className='footer-social'>
            <TwitterOutlined />
            <FacebookOutlined />
            <InstagramOutlined />
            <YoutubeOutlined />
            </div>
        </div>
        <div>
            <p>Download Our App</p>
            <div className='footer-operation'>
            <AppleFilled />
            <AndroidFilled />
            </div>
        </div>
        <div>
            <p>Proudly Built in HaNoi, VietNam</p>
        </div>
      </div>
    </div>
    <div className='footer-help'>
        <p className='footer-text'>HELP | HOW IT WORKS | PRIVACY | TERMS | JOBS | CONTACT | PRODUCT SUGGESTION | PRESS | YOUR PRIVACY CHOICES</p>
        <p className='footer-text'>EN &nbsp; EN-GB &nbsp; IT &nbsp; DE &nbsp; FR &nbsp; FR-CA &nbsp; ZH-CN &nbsp; ZN-TW &nbsp; JA &nbsp; KO &nbsp; ES-MX &nbsp; ES-US &nbsp; ES-ES</p>
      </div>
  </div>;
}
