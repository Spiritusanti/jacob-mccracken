import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image';
import Link from 'next/link';
import placeholder from "../public/aquarium_current.jpg"

function MyApp({ Component, pageProps }: AppProps) {
  return <body>
    <header>
      <div>
        <h1>Jacob McCracken</h1>
        <Image src={placeholder} alt="placeholder image description" height={250} width={250} />
      </div>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </header>
    <Component {...pageProps} />
    <footer>
      {/* copyright and social links */}
      <p>copyright Jacob McCracken 2022</p>
      <div>social links placeholder</div>
    </footer>
  </body>
}

export default MyApp
