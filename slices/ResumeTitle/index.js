import React from "react";
import { RichText } from "prismic-reactjs";
import styles from './styles.module.css'

const ResumeTitle = ({ slice }) => (
  <section className={styles.resumeTitle }>
    <RichText render={slice.primary.title} />
  </section>
);

export default ResumeTitle;
