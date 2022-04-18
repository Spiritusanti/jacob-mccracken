import { createClient } from "../prismicio";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import placeholder from "../public/aquarium_current.jpg";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import { GetStaticProps } from "next";
import { PrismicDocument } from "@prismicio/types";
import { FC } from "react";

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const projectCards = await client
    .getAllByType("ProjectCard")
    .catch((error) => console.error(error));
  return {
    props: {
      projectCards,
    },
  };
};

interface HomeProps {
  projectCards: PrismicDocument[]
}

const Home: FC<HomeProps> = (props) => {
  return (
    <main>
      {/* hero section */}
      <section role={"heroSection"}>
        <div
          title="hero image"
          style={{ backgroundImage: `url(${placeholder.src})` }}
          className={styles.heroImageDiv}
        >
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur amet doloremque eaque quaerat optio quibusdam,
              obcaecati laborum reiciendis quas et repellendus voluptatibus
              aperiam repellat libero, facilis quia reprehenderit. Omnis?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur amet doloremque eaque quaerat optio quibusdam,
              obcaecati laborum reiciendis quas et repellendus voluptatibus
              aperiam repellat libero, facilis quia reprehenderit. Omnis?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur amet doloremque eaque quaerat optio quibusdam,
              obcaecati laborum reiciendis quas et repellendus voluptatibus
              aperiam repellat libero, facilis quia reprehenderit. Omnis?
            </p>
          </div>
          <div className={styles.aboutSectionContentImageWrapper}>
            <Image
              src={placeholder}
              height={250}
              width={250}
              alt={"About Image placeholder"}
            ></Image>
          </div>
        </div>
      </section>
      <section
        role={"projectSection"}
        id="projects"
        className={styles.projectsSectionWrapper}
      >
        <h2>Selected Works</h2>
        <div className={styles.projectsGrid}>
          <SliceZone
            slices={props.projectCards[0].data.slices}
            components={components}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
