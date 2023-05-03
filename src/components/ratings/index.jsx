import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Star = () => (
  <Image
    alt="star"
    fill={true}
    src={'/assets/icons/star-filled.svg'}
    className="h-full object-cover"
  />
);

const StarOutline = () => (
  <Image
    alt="star"
    fill={true}
    src={'/assets/icons/star-outline.svg'}
    className="h-full object-cover"
  />
);

const RatingStar = ({ precision = 0.46 }) => {
  const hasPrecision = true;
  const ratingContainerRef = useRef(null);
  console.log((precision / 1.0) * 100);

  return (
    <div
      className="relative inline-flex h-[18px] w-[18px] items-center"
      ref={ratingContainerRef}
    >
      <span className="h-full w-full">
        <StarOutline />
      </span>
      <span
        className={`absolute h-full overflow-hidden ${
          hasPrecision ? `w-[60%]` : 'w-0'
        } `}
      >
        <Star />
      </span>
    </div>
  );
};

export default function Ratings({ rating }) {
  return (
    <div className="flex items-center gap-[2px]">
      <RatingStar />
    </div>
  );
}

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
};
