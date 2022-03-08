import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver, repoName } from "../prismicConfiguration";
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return <PrismicProvider
    linkResolver={linkResolver}
    internalLinkComponent={({ href, children, ...props }) => (
      <Link href={href}>
        <a {...props}></a>
      </Link>
    )}>
    <PrismicPreview repositoryName={repoName}>
      <body>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </body>
    </PrismicPreview>
  </PrismicProvider>
}

export default MyApp
