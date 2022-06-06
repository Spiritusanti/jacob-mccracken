import { Entry } from "contentful";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import HeroSection from "../../components/HeroSection";
import { fetchEntries } from "../../contentfulUtils";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from "next/image";


interface PortfolioItemPageProps {
    portfolioItemPage: Entry<any>
}

const PortfolioItemPage: NextPage<PortfolioItemPageProps> = ({ portfolioItemPage }) => {
    return (
        <article>
            <HeroSection HeroImageTitle={portfolioItemPage.fields.itemTitle} imageSrc={`https:${portfolioItemPage.fields.itemHeroImage.fields.file.url}`} imageAlt={""} />
            <section>
                <h2>{portfolioItemPage.fields.itemDescriptionSubtitle}</h2>
                <span>{documentToReactComponents(portfolioItemPage.fields.itemDescription)}</span>
                <Image
                    src={`https:${portfolioItemPage.fields.itemImagePrimary.fields.file.url}`}
                    alt={portfolioItemPage.fields.itemImagePrimary.description}
                    width={portfolioItemPage.fields.itemImagePrimary.fields.file.details.image.width}
                    height={portfolioItemPage.fields.itemImagePrimary.fields.file.details.image.height}
                />

                <span>{documentToReactComponents(portfolioItemPage.fields.itemDescriptionSecondary)}</span>
                <Image
                    src={`https:${portfolioItemPage.fields.itemImageSecondary.fields.file.url}`}
                    alt={portfolioItemPage.fields.itemImageSecondary.description}
                    width={portfolioItemPage.fields.itemImageSecondary.fields.file.details.image.width}
                    height={portfolioItemPage.fields.itemImageSecondary.fields.file.details.image.height}
                />
                <span>{documentToReactComponents(portfolioItemPage.fields.itemDescriptionTertiary)}</span>

            </section>

        </article>
    )
}

export default PortfolioItemPage;

// fetch paths from contentful
export const getStaticPaths: GetStaticPaths = async () => {
    const pages: Entry<any>[] = await fetchEntries('portfolioItemPage');
    const paths = pages.map(page => {
        return { params: { slug: page.fields.slug } }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pages: Entry<any>[] = await fetchEntries("portfolioItemPage", params!.slug);
    const page = pages && pages[0];
    console.log(page)
    return {
        props: {
            portfolioItemPage: page
        }
    }
}