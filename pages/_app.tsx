import '../styles/globals.css'
import { Fragment } from 'react'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>McCrackenDev</title>
        <meta name="viewport" content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='/favicon.png' type='image/png' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

export default MyApp
