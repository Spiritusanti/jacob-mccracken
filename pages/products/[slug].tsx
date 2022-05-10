import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ContactForm from '../../components/ContactForm';
import HeroSection from '../../components/HeroSection';
import ProductDescription from '../../components/ProductDescription';

interface ProductData {
    heroImage: StaticImageData,
    heroImageAlt: string;
    heroImageTitle: string;
    descP1: string;
    descP2: string;
    descP3: string;
    img1: StaticImageData;
    img1Alt: string;
    img2: StaticImageData;
    img2Alt: string;
}

interface ProductPageProps {
    productData: ProductData;
}

// export const getStaticPaths: GetStaticPaths = async () => {

//     return {
//         paths: [
//             { params: { id: productId } }
//         ],
//         fallback: false
//     }
// }


// export const getStaticProps: GetStaticProps = async () => {
//     const res = await fetchEntries();
//     if (res === undefined) {
//         console.error("query failed")
//     }
//     const productData = await res!.map((product) => {
//         return product.fields;
//     })
//     return { props: { productData } }
// }

const ProductPage: FC<ProductPageProps> = ({ productData }) => {
    const { heroImage, heroImageAlt, heroImageTitle, descP1, descP2, descP3, img1, img1Alt, img2, img2Alt } = productData;

    return (
        <div>
            <HeroSection imageAlt={heroImageAlt} imageSrc={heroImage} HeroImageTitle={heroImageTitle} />
            <section>
                <ProductDescription p1={descP1} p2={descP2} p3={descP3} img1={img1} img1Alt={img1Alt} img2={img2} img2Alt={img2Alt} />
                <ContactForm />
            </section>
        </div>
    )
}

export default ProductPage