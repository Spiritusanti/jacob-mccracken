import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import styles from "./styles.module.css";

const ProjectCard = ({ slice }) => (
  <a href={Link.url(slice.primary.project)} passHref>
    <div
      className={styles.projectCard}
      style={{ backgroundImage: `url(${slice.primary.projectImage.url})` }}
    >
      <div className={styles.projectCardContentWrapper}>
        <RichText render={slice.primary.title} />
        <RichText render={slice.primary.projectCardDescription} />
      </div>
    </div>
  </a>
);

export default ProjectCard;
