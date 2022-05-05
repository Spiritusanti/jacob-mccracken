import { FC } from "react";
import styles from '../styles/HeroSection.module.css'
import placeholder from '../public/aquarium_current.jpg'

const HeroSection: FC = () => {
    return (
        <section role={"heroSection"}>
            <div
                title="hero image"
                style={{ backgroundImage: `url(${placeholder.src})` }}
                className={styles.heroImageDiv}
            >
                <div className={styles.heroImageTitleWrapper}>
                    <h2>Hero Image Title</h2>
                    <a href="#projects">See my work</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;