import type { GetStaticProps, NextPage } from 'next'
// import { createClient } from '../prismic';
import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import placeholder from '../public/aquarium_current.jpg';
import ProjectCard from "../slices/ProjectCard/index";


// interface HomeProps {
//   ProjectCards: []
// }


// const getStaticProps: GetStaticProps = async ({ previewData }) => {
//   const client = createClient({ previewData });

//   const ProjectCards = await client.getAllByType("ProjectCard");

//   return {
//     props: { ProjectCards }
//   }
// }

const Home: NextPage = () => {

  // const featuredProjectCards = props.ProjectCards;
  // console.log(featuredProjectCards);
  return (
    <main>
      {/* hero section */}
      <section role={"heroSection"}>
        <div title='hero image' style={{ backgroundImage: `url(${placeholder.src})` }} className={styles.heroImageDiv}>
          <div className={styles.heroImageTitleWrapper}>
            <h2>Hero Image Title</h2>
            <a href="#projects">See my work</a>
          </div>
        </div>
      </section>
      <section role={"aboutSection"} className={styles.aboutSectionWrapper}>
        <div className={styles.aboutTitle}>
          <h2>Who is me?</h2>
        </div>
        <div className={styles.aboutSectionContentWrapper}>
          <div className={styles.aboutSectionContent}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus pariatur amet doloremque eaque quaerat optio quibusdam, obcaecati laborum reiciendis quas et repellendus voluptatibus aperiam repellat libero, facilis quia reprehenderit. Omnis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus pariatur amet doloremque eaque quaerat optio quibusdam, obcaecati laborum reiciendis quas et repellendus voluptatibus aperiam repellat libero, facilis quia reprehenderit. Omnis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus pariatur amet doloremque eaque quaerat optio quibusdam, obcaecati laborum reiciendis quas et repellendus voluptatibus aperiam repellat libero, facilis quia reprehenderit. Omnis?</p>
          </div>
          <div className={styles.aboutSectionContentImageWrapper}>
            <Image src={placeholder} height={250} width={250} alt={"About Image placeholder"}></Image>
          </div>
        </div>
        <div className={styles.aboutSectionResumeLinkWrapper}>
          <Link href="/resume">See my Resume</Link>
        </div>
      </section>
      <section role={"projectSection"} id="projects" className={styles.projectsSectionWrapper}>
        <h2>Selected Works</h2>
        <div className={styles.projectsGrid}>
          <p>no projects found</p>
        </div>
      </section>
    </main>
  )
}

export default Home
