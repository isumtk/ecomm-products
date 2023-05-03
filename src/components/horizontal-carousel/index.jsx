import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { CardA, CardB } from '@/components';
import PropTypes from 'prop-types';
import { ProductCardContext } from '@/pages/__provider';

export function HorizontalCarousel({ data }) {
  const { productCard } = useContext(ProductCardContext);
  useEffect(() => {
    console.log({ productCard });
  }, []);
  return (
    <div className="flex flex-col gap-2 overflow-auto">
      <div className="flex gap-2 p-4">
        {data.products.map((product) => {
          return productCard.type === 'cardA' ? (
            <CardA
              key={product.id}
              title={product.title}
              src={product.images[0]}
              price={product.price}
              rating={product.rating}
            />
          ) : (
            <CardB
              key={product.id}
              title={product.title}
              src={product.images[0]}
              price={product.price}
              rating={product.rating}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-8">
        <button className="flex h-14 w-14 items-center justify-center">
          <Image
            alt="back-arrow"
            width={48}
            height={48}
            src={'/assets/icons/chevron-left.svg'}
          />
        </button>
        <button className="flex h-14 w-14 items-center justify-center">
          <Image
            alt="next-arrow"
            width={48}
            height={48}
            src={'/assets/icons/chevron-right.svg'}
          />
        </button>
      </div>
    </div>
  );
}

HorizontalCarousel.propTypes = {
  data: PropTypes.object,
};
