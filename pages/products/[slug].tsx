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
    return {
        props: {
            productData: pages[0]
        }
    }
}

const ProductPage: FC<ProductPageProps> = ({ productData }) => {
    return (
        <div>
            <HeroSection imageAlt={productData.fields.heroImage.fields.description} imageSrc={`https:${productData.fields.heroImage.fields.file.url}`} HeroImageTitle={productData.fields.heroImageTitle} />
            <section>
                <ProductDescription
                    p1Title={productData.fields.ProductDescriptionSubtitle}
                    p2Title={productData.fields.ProductDesc2Subtitle}
                    p3Title={productData.fields.ProductDesc3Subtitle}
                    p1={productData.fields.productDescription}
                    p2={productData.fields.productDescription2}
                    p3={productData.fields.productDescription3}
                    img1={`https:${productData.fields.productImage1.fields.file.url}`}
                    img1Alt={productData.fields.productImage1.fields.description}
                    img2={`https:${productData.fields.productImage2.fields.file.url}`}
                    img2Alt={productData.fields.productImage2.fields.description}
                    pricing={productData.fields.pricing}
                    pricingTitle={productData.fields.pricingSubtitle}
                />
                <ContactForm />
            </section>
        </div>
    )
}

export default ProductPage