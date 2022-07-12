import { FC } from "react";
import styles from '../styles/HeroSection.module.css'

interface HeroSectionProps {
    imageAlt: string;
    imageSrc: any;
    HeroImageTitle: string;
}


const HeroSection: FC<HeroSectionProps> = ({ imageAlt, imageSrc, HeroImageTitle }) => {
    return (
        <section>
            <div
                title={imageAlt}
                style={{ backgroundImage: `url(${imageSrc})` }}
                className={styles.heroImageDiv}
            >
                <div className={styles.heroImageTitleWrapper}>
                    <h2>{HeroImageTitle}</h2>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;