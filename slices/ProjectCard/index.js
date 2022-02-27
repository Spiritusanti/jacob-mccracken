import React from "react";
import { RichText } from "prismic-reactjs";
import { Link } from "prismic-reactjs";
import styles from "./styles.module.css";

const ProjectCard = ({ slice }) => (
  <div className={styles.cardWrapper}>
    <a href={Link.url(slice.primary.project)} passHref>
      <div className={styles.titleWrapper}>
        <RichText render={slice.primary.title} />
      </div>
      <img
        src={slice.primary.projectImage.url}
        alt={slice.primary.projectImage.alt}
      />
    </a>
  </div>
);

export default ProjectCard;
