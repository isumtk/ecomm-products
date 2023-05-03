import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'next-themes';

export const ProductCardContext = createContext();

export function AppProvider({ children }) {
  const [productCard, setProductCard] = useState({
    type: 'cardA',
    scrollType: 'horizontal',
  });

  // useEffect(() => {
  //   setProductCard(
  //     JSON.parse(JSON.stringify(window.sessionStorage.getItem('product')))
  //   );
  // }, []);

  // useEffect(() => {
  //   window.sessionStorage.setItem('product', productCard);
  // }, [productCard]);

  return (
    <ThemeProvider>
      <ProductCardContext.Provider value={{ productCard, setProductCard }}>
        {children}
      </ProductCardContext.Provider>
    </ThemeProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.any,
};
