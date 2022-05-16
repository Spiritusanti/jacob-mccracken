import { FC } from "react"
import styles from '../styles/Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            {/* copyright and social links */}
            <div className={styles.socialLinkWrapper}>
                <a href="#">
                    <h5>Twitter</h5>
                </a>
                <a href="#">
                    <h5>Polywork</h5>
                </a>
            </div>
            <p className={styles.copyright}>© McCrackenDev 2022</p>
        </footer>
    )
}

export default Footer;