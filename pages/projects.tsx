import { GetStaticProps, NextPage } from "next";

import styles from '../styles/projects.module.css';

const projects: NextPage = (props) => {
  return (
    <section className={styles.projectPageSection}>
      <div className={styles.titleDiv}>
        <h2>My full range of work</h2>
      </div>
      <div className={styles.projectFlexWrapper}>

      </div>
    </section>
  )
}

export default projects;