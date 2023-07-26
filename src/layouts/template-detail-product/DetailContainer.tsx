/* eslint-disable object-shorthand */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Carousel, Tabs, Table, Collapse, Select } from 'antd';
import { EyeOutlined, TagOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getDetailProductRequest } from '../../redux/actions';
import SwipperContainer from '../swipper-demo/Swiper';
import { RootState } from '../../redux/store';
import './Detail.scss';

const { TabPane } = Tabs;

function DetailContainer() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetailProductRequest({ id: id }));
  }, []);

  const ProductReducer = useAppSelector(
    (state: RootState) => state.ProductReducer
  );
  const { dataDetail } = ProductReducer;
  // const sizes = JSON.parse(dataDetail.size);
  // const options = sizes?.map((e) => {
  //   return {
  //     value: e.name,
  //     label: e.name,
  //   };
  // });
  // console.log('options??? ', options);
  const [selectedValue, setSelectedValue] = useState(null);
  const DataTable = [
    {
      rowName: 'Feature',
      data: `${dataDetail.parentCategory}`,
    },
    {
      rowName: 'Brand Origin',
      data: `Chinese ${dataDetail.brand}`,
    },
    {
      rowName: 'Produced In',
      data: 'China',
    },
    {
      rowName: 'SKU',
      data: `${dataDetail.sku}`,
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
              <SwipperContainer image={dataDetail.image} />
            </div>
            <div className="page-detail-product">
              <div className="product-names-details">
                <h1 className="title-product">{dataDetail.name}</h1>
                <span className="product-price">$ {dataDetail.price}</span>
                <div className="product-description ">
                  {dataDetail.description}
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
                  <li className="promotion-item">
                    <TagOutlined />
                    <span>{dataDetail.views} people viewed the product</span>
                  </li>
                </ul>
                <div className="product-selection-wraper">
                  <span>Select type</span>
                  <Select
                    showSearch
                    className="product-selection"
                    placeholder="Select sample"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '')
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={{
                      value: '1',
                      label: 'Gấu nâu đậm',
                    }}
                    onChange={() => {}}
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
