import { FC } from "react";
import Image from 'next/image';

interface ProductDescriptionProps {
    p1: string;
    p2: string;
    p3: string;
    img1: StaticImageData;
    img2: StaticImageData;
    img1Alt: string;
    img2Alt: string;

}

const ProductDescription: FC<ProductDescriptionProps> = ({ p1, img1, img1Alt, p2, img2, img2Alt, p3 }) => {
    return (
        <div>
            <p>{p1}</p>
            <Image src={img1} alt={img1Alt} layout="responsive" />
            <p>{p2}</p>
            <Image src={img2} alt={img2Alt} layout="responsive" />
            <p>{p3}</p>
        </div>
    )
}

export default ProductDescription;