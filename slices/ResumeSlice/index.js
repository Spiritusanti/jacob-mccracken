import React from "react";
import { RichText } from "prismic-reactjs";
import styles from "./styles.module.css"

const ResumeSlice = ({ slice }) => (
  <section className={styles.resumeTitleSection}>
    <p>
      <RichText render={slice.primary.ObjectiveSection} />
    </p>
  </section>
);

export default ResumeSlice;
