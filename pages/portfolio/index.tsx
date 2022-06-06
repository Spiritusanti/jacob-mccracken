import { Entry } from "contentful"
import { GetStaticProps, NextPage } from "next"
import PortfolioCard from "../../components/PortfolioCard";
import { fetchEntries } from "../../contentfulUtils"
import styles from '../../styles/Portfolio.module.css';

// page for displaying range of work. Consists of 3 sections, paid projects, example sites, and passion projects

interface portfolioPageProps {
    paidProjects: Entry<any>[];
    templateProjects: Entry<any>[];
    hobbyProjects: Entry<any>[];
}

const portfolio: NextPage<portfolioPageProps> = ({ paidProjects, templateProjects, hobbyProjects }) => {
    return (
        <article>
            <h2 className={styles.pageTitle}>Portfolio</h2>
            {paidProjects.length > 0 && <section className={styles.portfolioSection}>
                <h2>Paid work examples</h2>
                <div className={styles.portfolioSectionGrid}>
                    {
                        paidProjects.map(project => {
                            return <span key={project.sys.id}>
                                <PortfolioCard
                                    slug={project.fields.slug}
                                    imageUrl={project.fields.itemImage.fields.file.url}
                                    imageAlt={project.fields.itemImage.fields.description}
                                    itemTitle={project.fields.itemTitle}
                                    itemDescription={project.fields.itemDescription}
                                />
                            </span>
                        })
                    }
                </div>
            </section>}
            {templateProjects.length > 0 &&
                <section className={styles.portfolioSection}>
                    <h2>Templates</h2>
                    <div className={styles.portfolioSectionGrid}>
                        {
                            templateProjects.map(project => {
                                return <span key={project.sys.id}>
                                    <PortfolioCard
                                        slug={project.fields.slug}
                                        imageUrl={project.fields.itemImage.fields.file.url}
                                        imageAlt={project.fields.itemImage.fields.description}
                                        itemTitle={project.fields.itemTitle}
                                        itemDescription={project.fields.itemDescription}
                                    />
                                </span>
                            })
                        }
                    </div>
                </section>
            }
            {hobbyProjects.length > 0 &&
                <section className={styles.portfolioSection}>
                    <h2>hobby projects</h2>
                    <div className={styles.portfolioSectionGrid}>
                        {
                            hobbyProjects.map(project => {
                                return <span key={project.sys.id}>
                                    <PortfolioCard
                                        slug={project.fields.slug}
                                        imageUrl={project.fields.itemImage.fields.file.url}
                                        imageAlt={project.fields.itemImage.fields.description}
                                        itemTitle={project.fields.itemTitle}
                                        itemDescription={project.fields.itemDescription}
                                    />
                                </span>
                            })
                        }
                    </div>
                </section>
            }
        </article>
    )
}

export default portfolio

export const getStaticProps: GetStaticProps = async () => {
    const cards: Entry<any>[] = await fetchEntries("portfolioCard");
    const paidProjects = cards.filter(card => card.fields.itemGroup.group === "paid")
    const templateProjects = cards.filter(card => card.fields.itemGroup.group === "template")
    const hobbyProjects = cards.filter(card => card.fields.itemGroup.group === "hobby")
    return {
        props: {
            paidProjects,
            templateProjects,
            hobbyProjects
        }
    }
}