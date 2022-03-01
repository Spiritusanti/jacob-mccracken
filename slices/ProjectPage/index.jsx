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
        <div className={styles.linkWrapper}>
          <a
            href={Link.url(slice.primary.LiveSiteLink)}
            style={{
              backgroundImage: `url(${slice.primary.GithubRepoImage.url})`,
            }}
            target="_blank"
            rel="noreferrer"
            title={slice.primary.GithubRepoImage.alt}
          >
            <h3>See the Repository</h3>
          </a>
          <a
            href={Link.url(slice.primary.githubRepoLink)}
            style={{
              backgroundImage: `url(${slice.primary.LiveSiteImage.url})`,
            }}
            target="_blank"
            rel="noreferrer"
            title={slice.primary.LiveSiteImage.alt}
          >
            <h3>See it Live</h3>
          </a>
        </div>
      </aside>
    </article>
  </main>
);

export default ProjectPage;
