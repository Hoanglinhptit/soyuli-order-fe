import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const MockVal = [
  {
    content: '',
    id: 1,
  },
];
export default function CarouselWrapper() {
  return (
    <div>
      <Carousel autoplay>
        {MockVal.map((e, i) => {
          return (
            <div key={e.id}>
              <h3 style={contentStyle}>{e.content}</h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
