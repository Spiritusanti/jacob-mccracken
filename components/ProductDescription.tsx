import { FC } from "react";
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types'
import styles from '../styles/ProductDescription.module.css';
import { Entry } from "contentful";

interface ProductDescriptionProps {
    productData: Entry<any>
}

const ProductDescription: FC<ProductDescriptionProps> = ({ productData }) => {
    return (
        <div className={styles.productDescGridWrapper}>
            <div className={styles.primaryDesc}>
                <h2>{productData.fields.title}</h2>
                <span>{documentToReactComponents(productData.fields.productDescription)}</span>
            </div>
            <div className={styles.secondaryDesc}>
                <div className={styles.imgWrapper}>
                    <Image
                        src={`https:${productData.fields.productImage1.fields.file.url}`}
                        alt=""
                        width={productData.fields.productImage1.fields.file.details.image.width}
                        height={productData.fields.productImage1.fields.file.details.image.height}
                    />
                </div>
                <div>
                    <h2>{productData.fields.productDesc2Subtitle}</h2>
                    <span>{documentToReactComponents(productData.fields.productDescription2)}</span>
                </div>
            </div>
            <div className={styles.tertiaryDesc}>
                <div>
                    <h2>{productData.fields.productDesc3Subtitle}</h2>
                    <span>{documentToReactComponents(productData.fields.productDescription3)}</span>
                </div>
                <div className={styles.imgWrapper}>
                    <Image
                        src={`https:${productData.fields.productImage2.fields.file.url}`}
                        alt={productData.fields.productImage2.fields.file.description}
                        width={productData.fields.productImage2.fields.file.details.image.width}
                        height={productData.fields.productImage2.fields.file.details.image.height} />
                </div>
            </div>
            <div className={styles.quaternaryDesc}>
                <h2>{productData.fields.pricingSubtitle}</h2>
                <ul>
                    {documentToReactComponents(productData.fields.pricing)}
                </ul>
                <h4>Use the form below to get started!</h4>
            </div>
        </div>
    )
}

export default ProductDescription;