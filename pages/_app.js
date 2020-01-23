/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import Router from 'next/router';
import theme from '../src/theme';
import store from '../src/redux/store';
import { initGA, logPageView } from '../src/utils';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <title>Remote Career</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}
