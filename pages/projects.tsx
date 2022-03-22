import { GetStaticProps, NextPage } from "next";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { components } from "../slices";

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
    const client = createClient({ previewData });
    const projectCards = await client
      .getAllByType("ProjectCard")
      .catch((error) => console.error(error));
    return {
      props: {
        projectCards,
      },
    };
  };

  interface ProjectProps {
      projectCards: PrismicDocument[];
  }

const projects: NextPage<ProjectProps> = (props) => {
    const { projectCards } = props;
    return (
        <section>
            <h1>My full range of work</h1>
            <SliceZone slices={projectCards[0].data.slices} components={components} />
        </section>
    )
}

export default projects;