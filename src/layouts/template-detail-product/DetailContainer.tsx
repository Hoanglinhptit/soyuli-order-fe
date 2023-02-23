/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Carousel,Tabs, Table, Collapse,  } from 'antd';
import { EyeOutlined , TagOutlined} from '@ant-design/icons'; 
import { useAppDispatch } from '../../redux/hooks';
import { getProductRequest } from '../../redux/actions';
import SwipperContainer from '../swipper-demo/Swiper';
import './Detail.scss';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  color: '#fff',
  alignItems: 'center',
  justifyContent: 'center',

  width: '28vw',
};

function DetailContainer() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  // const ref = useRef();
  // const children = ref.current.children

  useEffect(() => {
    dispatch(getProductRequest({ pageIndex: 1, limit: 10, keySearch: '' }));
    // children.children[currentIndex].className = "active"
  }, []);

  const DataTable = [
    {
      rowName: 'Thương hiệu',
      data: 'cai gi gi day',
    },
    {
      rowName: 'Xuất xứ thương hiệu',
      data: 'Mỹ',
    },
    {
      rowName: 'Sản xuất tại',
      data: 'Việt Nam',
    },
    {
      rowName: 'SKU',
      data: '000001',
    },
    {
      rowName: 'Chất liệu',
      data: 'Vải Canvas',
    },
    {
      rowName: 'Chế độ bảo hành',
      data: ' Bảo hành chính hãng 1 tháng theo phiếu bảo hành      ',
    },
    {
      rowName: 'Hướng dẫn bảo quản',
      data: (
        <div>
          <ul>
            <li>
              Tránh mang sản phẩm khi trời mưa hoặc thời tiết xấu để chúng không
              bị ướt dẫn đến bong tróc.
            </li>
            <li>
              Cất giữ sản phẩm ở nơi thoáng mát để giữ gìn chất lượng của sản
              phẩm ở mức tốt nhất.
            </li>
            <li>Lau chùi sản phẩm thường xuyên để tránh bụi.</li>
          </ul>
        </div>
      ),
    },
    {
      rowName: 'Quy cách đóng gói',
      data: (
        <div>
          <ul>
            <li>Giày</li>
            <li>Hộp giày</li>
            <li>Túi đựng </li>
            <li>Phiếu Bảo Hành</li>
          </ul>
        </div>
      ),
    },
  ];
  function keyCallBack(key: any){
    console.log(key);
  }
  return (
    <div className="page-detail-container">
      <div className="page-detail-grid">
        <div className="page-detail-col-70">
          <div className="page-detail-product-garaley">
            <div className="page-detail-big-image" >
              
              <SwipperContainer/>
            </div>
            <div className="page-detail-product">
              <div className="product-names-details">
                <h1 className="title-product">
                  Giày Converse Chuck Taylor All Star Gradient Color Blocked -
                  A00543C
                </h1>
                <span className="product-price">$1000</span>
                <div className="product-description ">
                  THÔNG TIN SẢN PHẨM Thương hiệu Converse Xuất xứ thương hiệu Mỹ
                  Sản xuất tại Việt Nam/ Ấn Độ/ Trung Quốc (tùy từng lô hàng)
                  SKU A00543C Model Converse Chuck Taylor All Star Chất liệu Vải
                  Canvas Hướng dẫn bảo quản Tránh mang sản phẩm khi trời mưa
                  hoặc thời tiết xấu để chúng...
                </div>
                <ul className='promotion-list'>
                  <li className='promotion-item'><TagOutlined /><span>Đăng ký để nhận thông báo từ bản tin của shop</span></li>
                  <li className='promotion-item'><TagOutlined /><span>Luôn bật thông báo để nhận được tin mới nhất</span></li>
                  <li className='promotion-item'><TagOutlined /><span>Shop sẽ thông báo các khung giờ sale</span></li>
                  <li className='promotion-item'><TagOutlined /><span>Đối với các hóa đơn từ 300$ sẽ đc freeship kèm voucher giảm giá 10%</span></li>
                  <li className='promotion-item'><TagOutlined /><span>Đối với các hóa đơn từ 1000$ sẽ đc freeship kèm voucher giảm giá phí cân nặng</span></li>
                </ul>
                <div className='product-size-wraper'></div>
                <div className='product-quantity-wrapper'></div>
              </div>
            </div>
          </div>
          <div className="page-detail-tab">
          <Tabs defaultActiveKey="1" onChange={keyCallBack} size="large" >
          <TabPane tab="Mô Tả Sản Phẩm" key="1" className='tab-header-item' >
            <Collapse accordion  >
              <Panel header="Thông tin chi tiết sản phẩm " key="1">
                {/* <Table columns={columns} dataSource={columnsData} />; */}
            
              </Panel>
            </Collapse>
          </TabPane>
          <TabPane tab="Hướng Dẫn Chọn Size " key="2" className='tab-header-item'>
            
          </TabPane>
          <TabPane tab="Gửi đánh giá cho chúng tôi " key="3" className='tab-header-item'>
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
          </div>
        </div>
        <div className="page-detail-col-30">
          <div className="wrap_modules_services-details">
            <div className="wrap_modules-services">
              <div className="item-service">
                <div className="content_service">
                  <p>Giao hàng siêu tốc</p>
                  <span>Nhận hàng trong 7 đến 14 ngày </span>
                </div>
              </div>
              <div className="item-service">
                <div className="content_service">
                  <p>7 ngày đổi trả hàng </p>
                  <span>Đổi trả nhanh chóng và dễ dàng</span>
                </div>
              </div>
              <div className="item-service">
                <div className="content_service">
                  <p>Bảo hành chính hãng</p>
                  <span>Bảo hành chính hãng 2 tháng</span>
                </div>
              </div>
              <div className="item-service">
                <div className="content_service">
                  <p>Giá tốt nhất</p>
                  <span>Tích điểm thành viên 5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContainer;
