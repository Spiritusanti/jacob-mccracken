import { FC } from "react";
import { GetStaticProps } from "next";
import { fetchEntries } from "../contentfulUtils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Entry } from "contentful";
import Image from "next/image";
import styles from '../styles/About.module.css';

interface AboutProps {
    aboutPage: Entry<any>;
}

const About: FC<AboutProps> = ({ aboutPage }) => {
    return (
        <article className={styles.aboutArticleWrapper}>
            <h2 className={styles.aboutTitle}>{aboutPage.fields.title}</h2>
            <section className={styles.aboutSectionGridWrapper}>
                <div>{documentToReactComponents(aboutPage.fields.biography)}</div>
                <div className={`${styles.imageWrapper} ${styles.profileImage}`}>
                    <Image src={`https:${aboutPage.fields.profileImage.fields.file.url}`} alt={aboutPage.fields.profileImage.description} width={aboutPage.fields.profileImage.fields.file.details.image.width} height={aboutPage.fields.profileImage.fields.file.details.image.height} layout="responsive" />
                </div>
            </section>
            <section className={styles.aboutSectionGridWrapper}>
                <div className={styles.imageWrapper}>
                    <Image src={`https:${aboutPage.fields.secondImage.fields.file.url}`} alt={aboutPage.fields.secondImage.description} width={aboutPage.fields.profileImage.fields.file.details.image.width} height={aboutPage.fields.profileImage.fields.file.details.image.height} layout="responsive"></Image>
                </div>
                <div>{documentToReactComponents(aboutPage.fields.biographySection2)}</div>
            </section>
        </article>
    )
}

export default About;

export const getStaticProps: GetStaticProps = async () => {
    const data = await fetchEntries("aboutPage");
    const aboutPage = data[0];

    return {
        props: {
            aboutPage
        }
    }
}