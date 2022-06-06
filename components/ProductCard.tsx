import React, { FC } from "react";
import Link from "next/link";
import styles from "../styles/Card.module.css"

export interface ProductCardProps {
    imageUrl: string;
    imageAlt: string;
    productTitle: string;
    productDescription: any[];
    slug: string;
}

const ProductCard: FC<ProductCardProps> = ({ imageUrl, imageAlt, productTitle, productDescription, slug }) => {
    return (<Link href={`products/${slug}`} passHref>
        <div
            className={styles.productCard}
            style={{ backgroundImage: `url(https:${imageUrl})` }}
            title={imageAlt}
        >
            <div className={styles.productCardContentWrapper}>
                <h2 className={styles.productCardTitle}>{productTitle}</h2>
                {productDescription.map(desc => {
                    return <p key={desc.content[0].value}>{desc.content[0].value}</p>
                })}
            </div>
        </div >
    </Link >)
};

export default ProductCard;