import { FC } from "react";
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types'
import styles from '../styles/ProductDescription.module.css';

interface ProductDescriptionProps {
    p1Title: string;
    p2Title: string;
    p3Title: string;
    p1: Document;
    p2: Document;
    p3: Document;
    img1: string;
    img2: string;
    img1Alt: string;
    img2Alt: string;
    pricingTitle: string;
    pricing: Document;
}

const ProductDescription: FC<ProductDescriptionProps> = ({ p1Title, p2Title, p3Title, p1, img1, img1Alt, p2, img2, img2Alt, p3, pricingTitle, pricing }) => {
    return (
        <div className={styles.productDescGridWrapper}>
            <div className={styles.primaryDesc}>
                <h2>{p1Title}</h2>
                <span>{documentToReactComponents(p1)}</span>
            </div>
            <div className={styles.secondaryDesc}>
                <div className={styles.imgWrapper}>
                    <Image src={img1} alt={img1Alt} width={1920} height={1080} />
                </div>
                <div>
                    <h2>{p2Title}</h2>
                    <span>{documentToReactComponents(p2)}</span>
                </div>
            </div>
            <div className={styles.tertiaryDesc}>
                <div>
                    <h2>{p3Title}</h2>
                    <span>{documentToReactComponents(p3)}</span>
                </div>
                <div className={styles.imgWrapper}>
                    <Image src={img2} alt={img2Alt} width={1920} height={1080} />
                </div>
            </div>
            <div className={styles.quaternaryDesc}>
                <h2>{pricingTitle}</h2>
                <ul>
                    {documentToReactComponents(pricing)}
                </ul>
                <h4>Use the form below to get started!</h4>
            </div>
        </div>
    )
}

export default ProductDescription;