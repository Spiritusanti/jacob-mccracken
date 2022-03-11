import React, { FC } from "react";
import Link from "next/link";
import styles from "../styles/ProjectCardDemo.module.css";

interface ProjectCardProps {
    imageUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => (
    <Link href="/" passHref>
        <div
            className={styles.projectCard}
            style={{ backgroundImage: `url(${props.imageUrl})` }}
        >
            <div className={styles.projectCardContentWrapper}>
                <h2>Project Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, soluta magnam iste iusto deserunt enim. </p>
            </div>
        </div>
    </Link>
);

export default ProjectCard;