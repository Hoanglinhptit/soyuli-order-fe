/* eslint-disable no-underscore-dangle */
import { HeartOutlined, PercentageOutlined } from '@ant-design/icons';

/* eslint-disable jsx-a11y/anchor-is-valid */

export default function ProductCard(props: any) {
  const { isSale, data } = props;

  return (
    <a
      className="block no-underline 
      bg-white rounded-[2px] text-inherit relative 
      shadow-xl ease-in 
      will-change-transform 
      hover:translate-y-[-5px] 
      hover:shadow-2xl"
      href={`/products/detail/${data._id}`}
    >
      {isSale && (
        <div
          className="absolute top-0 right-0 xl:w-10 xl:h-7 text-center rounded-tr-sm bg-[#FF0000] text-[#fff] 
     "
        >
          <span className="font-normal text-xl">
            50
            <PercentageOutlined className="text-sm" />
          </span>
        </div>
      )}
      <div className="">
        <img
          src={data.image[0].url}
          alt=""
          className="xl:w-full xl:h-44 object-cover  mb-[2px]"
        />
      </div>
      <h4 className="text-[1.4rem] font-normal leading-7 line-clamp-2 whitespace-break-spaces ml-2  mr-[2px] h-14">
        {data.name}
      </h4>
      <div className="flex mx-[8px] my-[6px] items-center justify-between h-[40px] ">
        {isSale ? (
          <p className="font-semibold text-2xl text-[#FF0000]">$ Infinity</p>
        ) : (
          <p className="font-semibold text-2xl">$ {data.price}</p>
        )}
        <HeartOutlined className="text-2xl" />
      </div>
    </a>
  );
}
