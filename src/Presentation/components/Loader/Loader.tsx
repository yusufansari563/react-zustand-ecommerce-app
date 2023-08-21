import React from 'react';
import './Loading.scss';

const Loader = () => {
  const skeletonCount = [1, 2, 3, 4, 5, 6];

  return (
    <div className='flex flex-wrap'>
      {skeletonCount.map((_item, i) => {
        return (
          <div className='card' key={i}>
            <div className='card__skeleton card__title'></div>
            <div className='card__skeleton card__description'> </div>
          </div>
        );
      })}
    </div>
  );
};

export default Loader;
