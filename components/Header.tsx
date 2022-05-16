import Logo from '../public/logo_transparent.png'
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styles from '../styles/Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Link href={"/"} passHref>
                <div className={styles.logoWrapper}>
                    <div className={styles.logoImage}>
                        <Image src={Logo} alt="McCrackenDev Logo" layout="responsive"/>
                    </div>
                    <h1>McCrackenDev</h1>
                </div>
            </Link>
            <nav className={styles.navWrapper}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                {/* <Link href={"/projects"}>Projects</Link>
                <Link href={"/testimonials"}>Testimonials</Link> */}
                <Link href={"/contact"}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header;