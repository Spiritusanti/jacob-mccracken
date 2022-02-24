import type { NextPage } from 'next'
import Image from "next/image";
import Link from 'next/link';
import placeholder from '../public/aquarium_current.jpg';

const Home: NextPage = () => {
  return (
    <main>
      {/* hero section */}
      <section role={"heroSection"}>
        <div>
          {/* hero image */}
          <Image src={placeholder} layout="responsive" alt={"hero Image place holder"}></Image>
        </div>
        <div>
          {/* hero image text */}
          <h2>Hero Image Title</h2>
          <button>See My Work</button>
        </div>
      </section>
      <section role={"aboutSection"}>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus pariatur amet doloremque eaque quaerat optio quibusdam, obcaecati laborum reiciendis quas et repellendus voluptatibus aperiam repellat libero, facilis quia reprehenderit. Omnis?</p>
        <Image src={placeholder} height={250} width={250} alt={"About Image placeholder"}></Image>
      </section>
      <section role={"projectSection"}>
        <h2>Projects</h2>
        <div>
          {/* grid of projects */}
          <p>placeholder for projects grid</p>
        </div>
      </section>
    </main>
  )
}

export default Home
