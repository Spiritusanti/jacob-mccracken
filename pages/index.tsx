import Image from "next/image";
import styles from "../styles/Home.module.css";
import placeholder from "../public/aquarium_current.jpg";
import { FC } from "react";
import HeroSection from "../components/HeroSection";
import { GetStaticProps } from 'next'
import { fetchEntries, fetchSingleEntry } from "../contentfulUtils";
import ProductCard from "../components/ProductCard";
import { Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface HomeProps {
  cards: Entry<any>[];
  hero: Entry<any>;
  blurb: Entry<any>
}

const Home: FC<HomeProps> = ({ cards, hero, blurb }) => {
  const blurbContent: [] = blurb.fields.homepageBlurb.content;
  return (
    <main>
      {/* hero section */}
      <HeroSection
        imageAlt={hero.fields.heroImage.fields.description}
        imageSrc={`https:${hero.fields.heroImage.fields.file.url}`}
        HeroImageTitle={hero.fields.heroImageTitle}
      />
      <section role={"aboutSection"} className={styles.aboutSectionWrapper}>

        <div className={styles.aboutSectionContentWrapper}>
          <div className={styles.aboutSectionContent}>
            <div className={styles.aboutTitle}>
              <h2>{blurb.fields.title}</h2>
            </div>
            {blurbContent.map((item) => {
              return documentToReactComponents(item)
            })}
          </div>
          <div className={styles.aboutSectionContentImageWrapper}>
            <Image
              src={`https:${blurb.fields.homepageBlurbImage.fields.file.url}`}
              height={blurb.fields.homepageBlurbImage.fields.file.details.image.height}
              width={blurb.fields.homepageBlurbImage.fields.file.details.image.width}
              alt={blurb.fields.homepageBlurbImage.fields.description}
              layout="responsive"
            ></Image>
          </div>
        </div>
      </section>
      <section
        role={"projectSection"}
        id="projects"
        className={styles.productsSectionWrapper}
      >
        <h2>Our Products</h2>
        <div className={styles.productsGrid}>
          {
            cards.map((card) => {
              return (<div className={styles.cardContainer} key={card.sys.id}>
                <ProductCard
                  imageAlt={card.fields.productImage.fields.description}
                  imageUrl={card.fields.productImage.fields.file.url}
                  productDescription={card.fields.productDescription.content}
                  productTitle={card.fields.productTitle}
                  slug={card.fields.slug}
                />
              </div>)
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
  const homepageBlurb = await fetchSingleEntry("5kcqMY4CRTZOGugvP94Pg2");
  return {
    props: { cards: cards, hero: homepageHero, blurb: homepageBlurb }
  }
}