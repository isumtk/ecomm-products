import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function CardB({ src, title, price, rating }) {
  return (
    <article className="h-[512px] w-[360px] rounded border-[1px] bg-th-primary p-2">
      <section className="h-[360px] overflow-hidden bg-inherit">
        <Image
          src={src}
          alt={title}
          width={360}
          height={360}
          loading="lazy"
          className="h-full rounded-md object-cover object-top"
        />
      </section>
      <section className="flex flex-col gap-2 pt-6 text-th-primary-focus">
        <div className="flex w-full items-center justify-between uppercase">
          {title} <span>${price}</span>
        </div>
        <div>{rating}</div>
      </section>
    </article>
  );
}

CardB.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
