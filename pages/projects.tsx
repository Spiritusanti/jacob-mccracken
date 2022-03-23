import { GetStaticProps, NextPage } from "next";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { components } from "../slices";
import styles from '../styles/projects.module.css';

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

interface ProjectProps {
  projectCards: PrismicDocument[];
}

const projects: NextPage<ProjectProps> = (props) => {
  const { projectCards } = props;
  return (
    <section className={styles.projectPageSection}>
      <div className={styles.titleDiv}>
        <h2>My full range of work</h2>
      </div>
      <div className={styles.projectFlexWrapper}>
        <SliceZone slices={projectCards[0].data.slices} components={components} />
      </div>
    </section>
  )
}

export default projects;