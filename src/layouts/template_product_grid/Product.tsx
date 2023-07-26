import { Checkbox } from 'antd';
import { useState } from 'react';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import ProductCard from './ProductCard';
import { priceList, categoryList, parentCategory, typeLists } from './Mockdata';
// eslint-disable-next-line @typescript-eslint/naming-convention
type category = {
  name: string;
};
interface Props {
  data: any[];
}
export default function Product(props: Props) {
  const { data } = props;

  const [category, setCategory] = useState<category[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const onChangeCategory = () => {
    console.log('is active???', category);
  };
  const handleCheckBoxChange = (e: CheckboxChangeEvent, value: any) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      // Implement your logic here when the checkbox is checked with the value
      console.log('Checkbox is checked with value:', value);
      // Add more code as needed
    }
  };
  return (
    <div className="bg-white">
      <div className="xl:w-[1200px] 2xl:w-[1340px] max-w-full my-0 mx-auto ">
        <div className="h-36 bg-[#f4f3f1] pl-[25px] pt-10">
          {/* title */}
          <h1 className="text-[2.8rem] pb-[20px]">Shoes & Sneakers</h1>
          <span>
            {/* text  */}
            Every sneaker you want is always available and verified by StockX.
            Buy and sell new sneakers & shoes from Air Jordan, adidas, Nike,
            Yeezy and more!
          </span>
        </div>
        {/* content container */}
        <div className="py-9 flex flex-wrap mx-[-4px]">
          <div className="px-1 w-1/6 shadow">
            {/* filter by parent category */}
            <div className="w-[90%] mx-auto mb-3 ">
              <h1 className="text-4xl font-medium mb-4">Features</h1>
              {parentCategory.map((e, key) => (
                <a
                  key={e.name}
                  href={e.href}
                  className="block text-[#000] hover:text-[#E7B5A3] xl:text-xl font-normal"
                >
                  {e.name}
                </a>
              ))}
            </div>
            {/* filter by options */}
            <div className="w-[90%] mx-auto mb-3 border-solid border-t-2 border-t-black">
              <h1 className="text-4xl font-medium mb-4">Category</h1>
              <Checkbox.Group
                onChange={onChangeCategory}
                className="block w-full text-sm font-normal"
              >
                {categoryList.map((val, key) => (
                  <Checkbox
                    key={val.name}
                    value={val.name}
                    className="first:ms-2 mb-1"
                    // onChange={handleCheckBoxChange(e.target.checked,val.name)}
                    checked={isChecked}
                  >
                    {val.name}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </div>
            {/* filter by price */}
            <div className="w-[90%] mx-auto mb-3 border-solid border-t-2 border-t-black">
              <h1 className="text-4xl font-medium mb-4">Prices</h1>
              <Checkbox.Group
                onChange={onChangeCategory}
                className="block w-full text-sm font-normal"
              >
                {priceList.map((e, key) => (
                  <Checkbox
                    key={e.name}
                    value={e.name}
                    className="first:ms-2 mb-1"
                    onChange={() => setCategory([...category, e])}
                  >
                    {e.name}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </div>
            {/* filter by type is optional */}
            <div className="w-[90%] mx-auto mb-3 border-solid border-t-2 border-t-black">
              <h1 className="text-4xl font-medium mb-4 ">Types</h1>
              <Checkbox.Group
                onChange={onChangeCategory}
                className="block w-full text-sm font-normal "
              >
                {typeLists.map((e, key) => (
                  <Checkbox
                    key={e.name}
                    value={e.name}
                    className="first:ms-2 mb-1"
                    onChange={() => setCategory([...category, e])}
                  >
                    {e.name}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </div>
          </div>
          <div className="px-1 h-full w-5/6 ">
            {/* filter */}
            <div className="w-full bg-slate-600 h-1/5">
              <div className="bg-white rounded-lg w-4/5  mx-auto h-28">
                Filler AutoComplete
              </div>
            </div>
            {
              // product list and pagination
            }
            <div className="w-full flex flex-wrap ">
              {data.map((e) => (
                <div key={e.sku} className="p-3 w-1/4 ">
                  <ProductCard data={e} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
