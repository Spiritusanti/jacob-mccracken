import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import classes from "./styles.module.css";

const ProjectPage = ({ slice }) => (
  <main className={classes.mainContent}>
    <div className={classes.titleWrapper}>
      <RichText render={slice.primary.title} />
    </div>
    <div className={classes.heroImageWrapper}>
      <img
        src={slice.primary.ProjectHeroImage.url}
        alt={slice.primary.ProjectHeroImage.alt}
      />
    </div>
    <article className={classes.gridWrapper}>
      <section className={classes.descriptionWrapper}>
        <RichText render={slice.primary.description} />
      </section>
      <aside className={classes.asideWrapper}>
        <div className={classes.linkWrapper}>
          <a href={Link.url(slice.primary.githubRepoLink)}>Github Repository</a>
          <a href={Link.url(slice.primary.LiveSiteLink)}>Live Site</a>
        </div>
        <div className={classes.imageWrapper}>
          <img
            src={slice.primary.ProjectImage2.url}
            alt={slice.primary.ProjectImage2.alt}
          />
          <img
            src={slice.primary.ProjectImage3.url}
            alt={slice.primary.ProjectImage3.alt}
          />
        </div>
      </aside>
    </article>
  </main>
);

export default ProjectPage;
