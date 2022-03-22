import React from "react";
import { RichText } from "prismic-reactjs";
import styles from "./styles.module.css";

const ResumeEducationSlice = ({ slice }) => (
  <section className={styles.educationSection}>
    <div className={styles.schoolWrapper}>
      <img
        src={slice.primary.schoolLogo.url}
        alt={slice.primary.schoolLogo.alt}
      />
    </div>
    <div className={styles.content}>
      <RichText render={slice.primary.Education} />
      <RichText render={slice.primary.EducationDescription} />
    </div>
  </section>
);

export default ResumeEducationSlice;
