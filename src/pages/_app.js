import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/globals.css';
import { AppProvider } from '../provider';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  pageProps: PropTypes.any,
};
