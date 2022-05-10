import React, { FC } from "react";
import Link from "next/link";
import styles from "../styles/ProductCard.module.css"

export interface ProductCardProps {
    imageUrl: string;
    imageAlt: string;
    productTitle: string;
    productDescription: any[];
}

const ProductCard: FC<ProductCardProps> = ({ imageUrl, imageAlt, productTitle, productDescription }) => {
    console.log('rendered card');
    return (<Link href="/" passHref>
        <div
            className={styles.productCard}
            style={{ backgroundImage: `url(${imageUrl})` }}
            title={imageAlt}
        >
            <div className={styles.productCardContentWrapper}>
                <h2 className={styles.productCardTitle}>{productTitle}</h2>
                {productDescription.map(desc => {
                    <p>{desc.content.value}</p>
                })}
            </div>
        </div >
    </Link >)
};

export default ProductCard;