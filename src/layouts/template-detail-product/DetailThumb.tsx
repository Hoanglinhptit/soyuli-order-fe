/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import * as React from 'react';

interface Props {
  images: string[];
  tab: (index: number) => void;
  myRef: any;
}

class DetailsThumb extends React.Component<Props> {
  render() {
    const { images, tab, myRef } = this.props;
    return (
      <div className="thumb" ref={myRef}>
        {images.map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            onClick={() => tab(index)}
          />
        ))}
      </div>
    );
  }
}

export default DetailsThumb;