import { createClient } from '../../prismicio';
import { PrismicDocumentWithUID } from '@prismicio/types';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import { SliceZone } from '@prismicio/react';
import * as Slices from '../../slices';

interface ProjectProps {
    projectPage: PrismicDocumentWithUID;
}

const components = {
    ProjectPage: Slices.ProjectPage,
    ProjectCard: Slices.ProjectCard,
}

export const getStaticPaths = async () => {
    const documents = await createClient().getAllByType("ProjectPage")

    return {
        paths: documents.map((doc) => {
            return [{ params: { uid: doc.uid }, locale: doc.lang }]
        }),
        fallback: true
    }
}


// Fetch content from Prismic - previews but doesn't hot reload.....
export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
    const client = createClient({ previewData })
    const uid: string = params!.uid ? params!.uid[0] : "";
    const page = await client.getByID("YhhHyRIAAC4A2VEZ");
    console.log(page.data.body);
    return {
        props: {
            "page": page
        }
    }
}


const Project: FC<ProjectProps> = (props) => {
    const { projectPage } = props;
    return (
        <div>
            <SliceZone slices={projectPage.data[0]} components={components} />
        </div>
    )
}

export default Project