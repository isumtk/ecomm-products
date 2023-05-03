import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
export default function CardA({ src, title, price, rating }) {
  return (
    <article className="h-[440px] w-[360px] rounded bg-th-primary p-2 text-th-primary-focus">
      <section className="group relative h-[220px] w-full overflow-hidden bg-inherit">
        <Image
          src={src}
          alt={title}
          width={344}
          height={162}
          loading="lazy"
          className="h-full w-full rounded-md object-cover object-left-top transition-opacity group-hover:opacity-30"
        />
        <button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-rose-200">
          <Image
            src={'/assets/icons/heart.svg'}
            alt="heart-icon"
            width={20}
            height={20}
          />
        </button>
      </section>
      <section className="flex flex-col gap-1">
        <div className="pt-6">
          <div className=" font-semibold">{title}</div>
          <div>$ {price}</div>
          <div className="flex items-center gap-1">
            <StarRatingComponent
              editing={false}
              starCount={5}
              starColor="#5e81ac"
              value={rating}
            />
            {Number.parseFloat(rating).toFixed(1)}
          </div>
        </div>
        <button className="rounded bg-th-accent p-2 text-th-primary-focus transition-colors">
          Add to cart
        </button>
        <button className="bg-inherit p-2 text-th-secodary hover:underline">
          Quick Shop
        </button>
      </section>
    </article>
  );
}

CardA.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};
