import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { HorizontalCarousel } from '@/components/horizontal-carousel';
import { VerticalCarousel } from '@/components/vertical-carousel';
import { ProductCardContext } from '../provider';
import Head from 'next/head';

export default function Home({ data }) {
  const cardStyle = useContext(ProductCardContext);
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="flex h-full w-full flex-col bg-neutral-50 pb-4">
        <header className="mb-4 h-14 bg-indigo-500 px-4 text-neutral-50">
          <nav className="container mx-auto flex h-full items-center justify-between">
            <div className="flex h-full items-center font-sans text-2xl font-medium">
              Products
            </div>
            <Link
              href={'/controls'}
              className="flex items-center justify-center px-3"
            >
              <p className="font-sans text-base font-medium">Settings</p>
            </Link>
          </nav>
        </header>
        {cardStyle.productCard.scrollType === 'vertical' ? (
          <VerticalCarousel data={data} />
        ) : (
          <div className="flex h-full w-full flex-1 items-center justify-center overflow-auto">
            <HorizontalCarousel data={data} />
          </div>
        )}
      </div>
    </>
  );
}

Home.propTypes = {
  data: PropTypes.object,
};

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/products?limit=5');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
