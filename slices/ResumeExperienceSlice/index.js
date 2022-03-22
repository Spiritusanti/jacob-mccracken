import React from "react";
import { RichText } from "prismic-reactjs";
import styles from "./styles.module.css";

const ResumeExperienceSlice = ({ slice }) => (
  <section className={styles.experienceSection}>
    <div className={styles.logoWrapper}>
      <img
        src={slice.primary.companyLogo.url}
        alt={slice.primary.companyLogo.alt}
      />
    </div>
    <div className={styles.content}>
      <RichText render={slice.primary.Experience} />
      <RichText render={slice.primary.WorkExperienceDescription} />
    </div>
  </section>
);

export default ResumeExperienceSlice;
