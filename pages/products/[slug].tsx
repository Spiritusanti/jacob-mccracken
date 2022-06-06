import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ContactForm from '../../components/ContactForm';
import HeroSection from '../../components/HeroSection';
import ProductDescription from '../../components/ProductDescription';
import { fetchEntries } from '../../contentfulUtils';
import { Entry } from 'contentful';

interface ProductPageProps {
    productData: Entry<any>;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages: Entry<any>[] = await fetchEntries('productPage');
    const paths = pages.map(page => {
        return { params: { slug: page.fields.slug } }
    })
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pages = await fetchEntries('productPage', params!.slug);
    const page = pages ? pages[0] : null;
    return {
        props: {
            productData: page
        }
    }
}

const ProductPage: FC<ProductPageProps> = ({ productData }) => {
    return (
        <article>
            <HeroSection imageAlt={productData.fields.heroImage.fields.description} imageSrc={`https:${productData.fields.heroImage.fields.file.url}`} HeroImageTitle={productData.fields.heroImageTitle} />
            <section>
                <ProductDescription
                    productData={productData}
                />
                <ContactForm />
            </section>
        </article>
    )
}

export default ProductPage