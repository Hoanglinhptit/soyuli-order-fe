/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Carousel, Tabs, Table, Collapse, Select } from 'antd';
import { EyeOutlined, TagOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../redux/hooks';
import { getProductRequest } from '../../redux/actions';
import SwipperContainer from '../swipper-demo/Swiper';
import './Detail.scss';

const { Panel } = Collapse;
const { TabPane } = Tabs;

function DetailContainer() {
  const dispatch = useAppDispatch();
  console.log('params receive??', useParams());

  const { id } = useParams();
  console.log('id recept ???', id);

  // const ref = useRef();
  // const children = ref.current.children

  useEffect(() => {
    dispatch(getProductRequest({ pageIndex: 1, limit: 10, keySearch: '' }));
    // children.children[currentIndex].className = "active"
  }, []);

  const DataTable = [
    {
      rowName: 'Brand',
      data: 'Decorations',
    },
    {
      rowName: 'Brand Origin',
      data: 'China',
    },
    {
      rowName: 'Produced In',
      data: 'China',
    },
    {
      rowName: 'SKU',
      data: '000001',
    },
    {
      rowName: 'Material',
      data: 'Cotton',
    },
    {
      rowName: 'Warranty',
      data: ' Genuine 1 month warranty according to the warranty card',
    },
    {
      rowName: 'Storage Instructions',
      data: (
        <div>
          <ul>
            <li>
              Avoid carrying the products in rainy or bad weather so that they
              do not getting wet leads to peeling.
            </li>
            <li>
              Store the product in a cool place to preserve its quality product
              at its best.
            </li>
            <li>Clean the product regularly to avoid dust.</li>
          </ul>
        </div>
      ),
    },
    {
      rowName: 'Packaging Specifications',
      data: (
        <div>
          <ul>
            <li>Orders</li>
            <li>Original box of order items</li>
            <li>Shockproof box with clearance ticket</li>
            <li>Original manufacturer's warranty card</li>
            <li>Standard stamps of domestic products</li>
          </ul>
        </div>
      ),
    },
  ];
  const columns = [
    {
      title: 'The information',
      dataIndex: 'rowName',
    },
    {
      title: 'Details',
      dataIndex: 'data',
    },
  ];
  function keyCallBack(key: any) {
    console.log(key);
  }
  return (
    <div className="page-detail-container">
      <div className="page-detail-grid">
        <div className="page-detail-col-70">
          <div className="page-detail-product-garaley">
            <div className="page-detail-big-image">
              <SwipperContainer />
            </div>
            <div className="page-detail-product">
              <div className="product-names-details">
                <h1 className="title-product">
                  Backrest cushion My Baby Bear order whole piece 65*45cm
                </h1>
                <span className="product-price">$ 1000</span>
                <div className="product-description ">
                  Hottrend arrives to stir up the teddy bear market with the
                  image of a chair Super warm like cotton, soft fluffy, no hair
                  loss, an Perfect for babies' sensitive skin. Care
                  instructions: Avoid Use the product when it is humid or place
                  it on a damp floor...
                </div>
                <ul className="promotion-list">
                  <li className="promotion-item">
                    <TagOutlined />
                    <span>
                      Sign up to receive the latest from the shop's news
                    </span>
                  </li>
                  {/* <li className="promotion-item">
                    <TagOutlined />
                    <span>Luôn bật thông báo để nhận được tin mới nhất</span>
                  </li> */}
                  {/* <li className="promotion-item">
                    <TagOutlined />
                    <span>Shop sẽ thông báo các khung giờ sale</span>
                  </li> */}
                  <li className="promotion-item">
                    <TagOutlined />
                    <span>
                      For bills from 300$ will get free shipping with voucher
                      10% discount%
                    </span>
                  </li>
                  <li className="promotion-item">
                    <TagOutlined />
                    <span>
                      For bills from 1000$ will get free shipping with weight
                      discount voucher
                    </span>
                  </li>
                  <li className="promotion-item">
                    <TagOutlined />
                    <span>Support COD shipping fee</span>
                  </li>
                </ul>
                <div className="product-selection-wraper">
                  <span>Select</span>
                  <Select
                    showSearch
                    className="product-selection"
                    placeholder="Chọn mẫu"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '')
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                      {
                        value: '1',
                        label: 'Gấu nâu đậm',
                      },
                      {
                        value: '2',
                        label: 'Vịt vàng',
                      },
                      {
                        value: '3',
                        label: 'Gấu loster hồng',
                      },
                      {
                        value: '4',
                        label: 'Gấu nâu nhạt ',
                      },
                    ]}
                  />
                </div>
                <div className="product-quantity-wrapper"></div>
                <div className="product-button-handle">
                  <button>Order</button>
                  <button>Add to card</button>
                </div>
              </div>
            </div>
          </div>
          <div className="page-detail-tab">
            <Tabs defaultActiveKey="1" onChange={keyCallBack} size="large">
              <TabPane
                tab="Detailed Product Description"
                key="1"
                className="tab-header-item"
              >
                {/* <Panel header="Thông tin chi tiết sản phẩm " key="1"></Panel> */}
                {/* <Collapse accordion> */}
                <Table columns={columns} dataSource={DataTable} />;
                {/* </Collapse> */}
              </TabPane>
              <TabPane
                tab="Related Products"
                key="2"
                className="tab-header-item"
              ></TabPane>
              <TabPane tab="FeedBacks" key="3" className="tab-header-item">
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
                  <p>Fast delivery </p>
                  <span>Receive goods in 7 to 14 days </span>
                </div>
              </div>
              <div className="item-service">
                <div className="content_service">
                  <p>7 days return and exchange </p>
                  <span>Quick and easy returns</span>
                </div>
              </div>
              <div className="item-service">
                <div className="content_service">
                  <p>Warranty genuine</p>
                  <span>Genuine 2 months warranty</span>
                </div>
              </div>
              <div className="item-service">
                <div className="content_service">
                  <p>Best price</p>
                  <span>Earn 5% member points</span>
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
