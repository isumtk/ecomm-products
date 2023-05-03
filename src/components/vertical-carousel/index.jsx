import React, { useContext } from 'react';
import Image from 'next/image';
import { CardA, CardB } from '@/components';
import PropTypes from 'prop-types';
import { ProductCardContext } from '@/provider';

export function VerticalCarousel({ data }) {
  const { productCard } = useContext(ProductCardContext);
  return (
    <div className="relative mx-auto flex h-[800px] justify-center overflow-y-auto">
      <div className="sticky top-0 flex h-full flex-col items-center justify-center gap-8">
        <button className="flex h-14 w-14 items-center justify-center">
          <Image
            alt="back-arrow"
            width={48}
            height={48}
            src={'/assets/icons/chevron-up.svg'}
          />
        </button>
        <button className="flex h-14 w-14 items-center justify-center">
          <Image
            alt="next-arrow"
            width={48}
            height={48}
            src={'/assets/icons/chevron-down.svg'}
          />
        </button>
      </div>
      <div className="flex h-full flex-col gap-2">
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
        <span className="h-8"></span>
      </div>
    </div>
  );
}

VerticalCarousel.propTypes = {
  data: PropTypes.object,
};
