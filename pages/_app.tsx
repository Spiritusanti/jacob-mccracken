import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PrismicProvider } from '@prismicio/react'

import { linkResolver } from "../prismicio";
import Link from 'next/link'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PrismicProvider>)
}

export default MyApp
