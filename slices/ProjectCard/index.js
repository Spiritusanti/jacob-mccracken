import React from "react";
import { RichText } from "prismic-reactjs";
// import { Link } from "prismic-reactjs";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const ProjectCard = ({ slice }) => {
  const router = useRouter();
  // href in anchor tag is a placeholder until issue with Link is resolved.
  return (
    <a href={`projects/${slice.primary.project.uid}`}>
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
};

export default ProjectCard;
