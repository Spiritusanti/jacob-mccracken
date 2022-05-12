import { FC } from "react";
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types'

interface price {
    nodeType: string;
    data: {};
    content: string[]
}

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
        <div>
            <h2>{p1Title}</h2>
            <span>{documentToReactComponents(p1)}</span>
            <Image src={img1} alt={img1Alt} width={1920} height={1080}/>
            <h2>{p2Title}</h2>
            <span>{documentToReactComponents(p2)}</span>
            <Image src={img2} alt={img2Alt} width={1920} height={1080} />
            <h2>{p3Title}</h2>
            <span>{documentToReactComponents(p3)}</span>
            <h2>{pricingTitle}</h2>
            <ul>
                {documentToReactComponents(pricing)}
            </ul>
        </div>
    )
}

export default ProductDescription;