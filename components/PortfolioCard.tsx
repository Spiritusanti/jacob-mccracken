import React, { FC } from "react";
import Link from "next/link";
import styles from "../styles/Card.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Entry } from "contentful";

export interface PortfolioCardProps {
    imageUrl: string;
    imageAlt: string;
    itemTitle: string;
    itemDescription: any;
    slug: Entry<any>;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ imageUrl, imageAlt, itemTitle, itemDescription, slug }) => {
    return (<Link href={`/portfolio/${slug.fields.slug}`} passHref>
        <div
            className={styles.productCard}
            style={{ backgroundImage: `url(https:${imageUrl})` }}
            title={imageAlt}
        >
            <div className={styles.productCardContentWrapper}>
                <h2 className={styles.productCardTitle}>{itemTitle}</h2>
                {documentToReactComponents(itemDescription)}
            </div>
        </div >
    </Link >)
};

export default PortfolioCard;