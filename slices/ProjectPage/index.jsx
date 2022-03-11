import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import styles from "./styles.module.css";

const ProjectPage = ({ slice }) => (
  <main className={styles.mainContent}>
    <div
      className={styles.heroImage}
      style={{ backgroundImage: `url(${slice.primary.ProjectHeroImage.url})` }}
    >
      <div className={styles.titleWrapper}>
        <RichText render={slice.primary.title} />
      </div>
    </div>
    <article className={styles.gridWrapper}>
      <section className={styles.descriptionWrapper}>
        <div className={styles.linkWrapper}>
          <a
            href={Link.url(slice.primary.githubRepoLink)}
            target="_blank"
            rel="noreferrer"
          >
            See it Live
          </a>
          <a
            href={Link.url(slice.primary.LiveSiteLink)}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <RichText render={slice.primary.description} />
        <div className={styles.descriptionImageWrapper}>
          <img
            src={slice.primary.ProjectDescriptionImage.url}
            alt={slice.primary.ProjectDescriptionImage.alt}
          />
        </div>
        <RichText render={slice.primary.SecondaryDescription} />
      </section>
      <aside className={styles.asideWrapper}>
          <h2>Technology</h2>
          <div className={styles.asideSectionTechWrapper}>
            <RichText render={slice.primary.TechnologyUsedAside} />
          </div>
      </aside>
    </article>
  </main>
);

export default ProjectPage;
