import Logo from '../public/logo_transparent.png'
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styles from '../styles/Header.module.css';
import { useState } from 'react';
import useOnClickOutside from "react-cool-onclickoutside";
import { useRouter } from 'next/router';

const Header: FC = () => {
    const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
    const history = useRouter();
    const ref = useOnClickOutside(() => {
        setNavBarOpen(false);
    })


    const closeNavHandler = () => {
        setNavBarOpen(false);
    }
    const navBarHandler = () => {
        if (navBarOpen) {
            setNavBarOpen(false)
        } else {
            setNavBarOpen(true)
        }
    }

    return (
        <header className={styles.header}>
            <section className={styles.headerMain}>
                <Link href={"/"} passHref>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logoImage}>
                            <Image src={Logo} alt="McCrackenDev Logo" layout="responsive" />
                        </div>
                        <h1>McCrackenDev</h1>
                    </div>
                </Link>
                <button className={styles.hamburgerWrapper} onClick={navBarHandler}>
                    <div className={styles.hamburger}></div>
                </button>
            </section>
            <section>
                {navBarOpen && <nav className={styles.navWrapper} role="navigation" ref={ref}>
                    <Link href={"/"}>
                        <a onClick={closeNavHandler}>Home</a>
                    </Link>
                    <Link href={"/about"}>
                        <a onClick={closeNavHandler}>About</a>
                    </Link>
                    {/* <Link href={"/projects"}><a onClick={closeNavHandler}>Projects</a></Link>
                    <Link href={"/testimonials"}><a onClick={closeNavHandler}>Testimonials</a></Link> */}
                    <Link href={"/contact"}>
                        <a onClick={closeNavHandler}>Contact</a>
                    </Link>
                </nav>}
            </section>
        </header>
    )
}

export default Header;