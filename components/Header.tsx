import Logo from '../public/logo.png'
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styles from '../styles/Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <div className={styles.logoImage}>
                    <Image src={Logo} alt="McCrackenDev Logo" layout="responsive"/>
                </div>
                <h1>McCrackenDev</h1>
            </div>
            <nav className={styles.navWrapper}>
                <Link href={"/"}>Home</Link>
                <Link href={"/projects"}>Projects</Link>
                <Link href={"/testimonials"}>Testimonials</Link>
                <Link href={"/contact"}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header;