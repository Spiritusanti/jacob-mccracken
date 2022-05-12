import Image from "next/image";
import styles from "../styles/Home.module.css";
import placeholder from "../public/aquarium_current.jpg";
import { FC } from "react";
import HeroSection from "../components/HeroSection";
import { GetStaticProps } from 'next'
import { fetchEntries, fetchSingleEntry } from "../contentfulUtils";
import ProductCard from "../components/ProductCard";
import { Entry } from "contentful";

interface HomeProps {
  cards: Entry<any>[];
  hero: Entry<any>;
}

const Home: FC<HomeProps> = ({ cards, hero }) => {
  return (
    <main>
      {/* hero section */}
      <HeroSection
        imageAlt={hero.fields.heroImage.fields.description}
        imageSrc={`https:${hero.fields.heroImage.fields.file.url}`}
        HeroImageTitle={hero.fields.heroImageTitle}
      />
      <section role={"aboutSection"} className={styles.aboutSectionWrapper}>
        <div className={styles.aboutTitle}>
          <h2>Who is me?</h2>
        </div>
        <div className={styles.aboutSectionContentWrapper}>
          <div className={styles.aboutSectionContent}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur amet doloremque eaque quaerat optio quibusdam,
              obcaecati laborum reiciendis quas et repellendus voluptatibus
              aperiam repellat libero, facilis quia reprehenderit. Omnis?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur amet doloremque eaque quaerat optio quibusdam,
              obcaecati laborum reiciendis quas et repellendus voluptatibus
              aperiam repellat libero, facilis quia reprehenderit. Omnis?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus pariatur amet doloremque eaque quaerat optio quibusdam,
              obcaecati laborum reiciendis quas et repellendus voluptatibus
              aperiam repellat libero, facilis quia reprehenderit. Omnis?
            </p>
          </div>
          <div className={styles.aboutSectionContentImageWrapper}>
            <Image
              src={placeholder}
              height={250}
              width={250}
              alt={"About Image placeholder"}
            ></Image>
          </div>
        </div>
      </section>
      <section
        role={"projectSection"}
        id="projects"
        className={styles.projectsSectionWrapper}
      >
        <h2>Our Products</h2>
        <div className={styles.projectsGrid}>
          {
            cards.map((card) => {
              return (<ProductCard
                key={card.sys.id}
                imageAlt={card.fields.productImage.fields.description}
                imageUrl={card.fields.productImage.fields.file.url}
                productDescription={card.fields.productDescription.content}
                productTitle={card.fields.productTitle}
                slug={card.fields.slug}
              />)
            })
          }
        </div>
      </section>
    </main>
  );
};

export default Home;


export const getStaticProps: GetStaticProps = async () => {
  const cards = await fetchEntries("productCard");
  const homepageHero = await fetchSingleEntry("hP2lWaaGxu582mwm4brcy");
  return {
    props: { cards: cards, hero: homepageHero }
  }
}