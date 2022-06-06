import Logo from '../public/logo_transparent.png'
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styles from '../styles/Header.module.css';
import { useState } from 'react';
import useOnClickOutside from "react-cool-onclickoutside";

const Header: FC = () => {
    const [navBarOpen, setNavBarOpen] = useState<boolean>(false);
    const ref = useOnClickOutside(() => {
        setNavBarOpen(false);
    })


    const closeNavHandler = () => {
        setNavBarOpen(false);
    }
    const NavBarHandler = () => {
        setNavBarOpen(!navBarOpen)
        console.log(navBarOpen);
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
                <button className={styles.hamburgerWrapper} onClick={NavBarHandler} ref={ref}>
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
                    <Link href={"/portfolio"}>
                        <a onClick={closeNavHandler}>Portfolio</a>
                    </Link>
                    {/*<Link href={"/testimonials"}><a onClick={closeNavHandler}>Testimonials</a></Link> */}
                    <Link href={"/contact"}>
                        <a onClick={closeNavHandler}>Contact</a>
                    </Link>
                </nav>}
            </section>
        </header>
    )
}

export default Header;