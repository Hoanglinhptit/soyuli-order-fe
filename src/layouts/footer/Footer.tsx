/* eslint-disable react/no-unescaped-entities */

import { Col, Row } from 'antd';
import {
  AndroidFilled,
  AppleFilled,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

export default function Footer() {
  return (
    <div className="bg-[#242424] text-[#ffff]">
      <div className="mt-0 mb-0 2xl:mx-[135px] xl:mx-[100px]">
        <h1 className="font-bold pt-[35px] pb-[35px] pr-0 pl-0 text-5xl">
          Soyuli.Access the Now.
        </h1>
        <div>
          <Row>
            <Col span={4}>
              <p className="font-medium 2xl:text-[1.4rem] xl:text-[1.2rem]">
                Air Jordan
              </p>
              <p className="text-[1rem] my-[10px]">Air Jordan 1</p>
              <p className="text-[1rem] my-[10px]">Air Jordan Release Dates</p>
              <p className="text-[1rem] my-[10px]">Womens Jordans</p>
              <p className="text-[1rem] my-[10px]">Air Jordan 11</p>
              <p className="text-[1rem] my-[10px]">Air Jordan 4</p>
              <p className="text-[1rem] my-[10px]">Jordan 1 Mid</p>
            </Col>
            <Col span={4}>
              <p className="font-medium 2xl:text-[1.4rem] xl:text-[1.2rem]">
                Yeezy
              </p>
              <p className="text-[1rem] my-[10px]">Yeezy Boost 350</p>
              <p className="text-[1rem] my-[10px]">Yeezy Boost 350 V2</p>
              <p className="text-[1rem] my-[10px]">Yeezy Boost 700</p>
              <p className="text-[1rem] my-[10px]">Yeezy Boots</p>
              <p className="text-[1rem] my-[10px]">Yeezy Slides</p>
              <p className="text-[1rem] my-[10px]">Yeezy Foam RNNR</p>
            </Col>
            <Col span={4}>
              <p className="font-medium 2xl:text-[1.4rem] xl:text-[1.2rem]">
                Popular Releases
              </p>
              <p className="text-[1rem] my-[10px]">Lightning McQueen Crocs</p>
              <p className="text-[1rem] my-[10px]">NikeCraft GPS Yellow</p>
              <p className="text-[1rem] my-[10px]">Jordan 2 J Balvin</p>
              <p className="text-[1rem] my-[10px]">Adidas Samba</p>
              <p className="text-[1rem] my-[10px]">Jordan 1 Yellow Toe</p>
              <p className="text-[1rem] my-[10px]">Converse Chuck Taylor</p>
            </Col>
            <Col span={4}>
              <p className="font-medium 2xl:text-[1.4rem] xl:text-[1.2rem]">
                Apparel
              </p>
              <p className="text-[1rem] my-[10px]">Supreme</p>
              <p className="text-[1rem] my-[10px]">Essentials</p>
              <p className="text-[1rem] my-[10px]">Chrome Hearts</p>
              <p className="text-[1rem] my-[10px]">Vlone</p>
              <p className="text-[1rem] my-[10px]">Nike Tech Fleece</p>
              <p className="text-[1rem] my-[10px]">Yeezy GAP</p>
            </Col>
            <Col span={4}>
              <p className="font-medium 2xl:text-[1.4rem] xl:text-[1.2rem]">
                Nike
              </p>
              <p className="text-[1rem] my-[10px]">Nike Dunk</p>
              <p className="text-[1rem] my-[10px]">Nike Blazer</p>
              <p className="text-[1rem] my-[10px]">Nike Air Force 1</p>
              <p className="text-[1rem] my-[10px]">Women's Air Force 1s</p>
              <p className="text-[1rem] my-[10px]">Women's Nike Dunks</p>
              <p className="text-[1rem] my-[10px]">Women's Nike Shoes</p>
            </Col>
            <Col span={4}>
              <p className="font-medium 2xl:text-[1.4rem] xl:text-[1.2rem]">
                Sell
              </p>
              <p className="text-[1rem] my-[10px]">Selling Guide</p>
              <p className="text-[1rem] my-[10px]">Professional Tools</p>
              <p className="text-[1rem] my-[10px]">Scout</p>
              <p className="text-[1rem] my-[10px]">Developers</p>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="flex justify-between mt-[20px]">
          <div>
            <button className="py-[10px] px-[20px] bg-[rgb(62, 60, 60)] text-[#fff] border-solid border-[1px] border-[#fff]">
              Vietnam | English | Currency
            </button>
          </div>
          <div>
            <p>Find Us on Social</p>
            <div className="flex justify-between mt-[10px]">
              <TwitterOutlined />
              <FacebookOutlined />
              <InstagramOutlined />
              <YoutubeOutlined />
            </div>
          </div>
          <div>
            <p>Download Our App</p>
            <div className="flex justify-around mt-[10px] mb-4">
              <AppleFilled />
              <AndroidFilled />
            </div>
          </div>
          <div>
            <p>Proudly Built in HaNoi, VietNam</p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-black">
        <p className="font-[1rem] my-0 mx-24 py-0.5 px-0">
          HELP | HOW IT WORKS | PRIVACY | TERMS | JOBS | CONTACT | PRODUCT
          SUGGESTION | PRESS | YOUR PRIVACY CHOICES
        </p>
        <p className="font-[1rem] my-0 mx-24 py-0.5 px-0">
          EN &nbsp; EN-GB &nbsp; IT &nbsp; DE &nbsp; FR &nbsp; FR-CA &nbsp;
          ZH-CN &nbsp; ZN-TW &nbsp; JA &nbsp; KO &nbsp; ES-MX &nbsp; ES-US
          &nbsp; ES-ES
        </p>
      </div>
    </div>
  );
}
