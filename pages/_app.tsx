import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

// primsic imports
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}>
      <PrismicPreview repositoryName={repositoryName!} >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PrismicPreview>
    </PrismicProvider>
  )

}

export default MyApp
