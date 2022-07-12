import { FC } from "react"
import styles from '../styles/Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            {/* copyright and social links */}
            <div className={styles.socialLinkWrapper}>
                <a href="#">
                    <p>Twitter</p>
                </a>
                <a href="#">
                    <p>Polywork</p>
                </a>
            </div>
            <p className={styles.copyright}>© McCrackenDev 2022</p>
        </footer>
    )
}

export default Footer;