import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>McCrackenDev</title>
        <meta name="viewport" content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Freelance developer providing development services to small business.' />
        <link rel='shortcut icon' href='/favicon.png' type='image/png' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
