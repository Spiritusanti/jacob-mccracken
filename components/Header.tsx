import placeholder from "../public/aquarium_current.jpg";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styles from '../styles/Header.module.css';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <Image src={placeholder} alt="placeholder image description" height={100} width={100} />
                <h1>Jacob McCracken</h1>
            </div>
            <nav className={styles.navWrapper}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/projects"}>Projects</Link>
                <Link href={"/contact"}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header;