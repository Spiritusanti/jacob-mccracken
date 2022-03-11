import { createClient } from '../../prismicio';
import { PrismicDocument } from '@prismicio/types';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import { SliceZone } from '@prismicio/react';
import * as Slices from '../../slices';
import { ParsedUrlQuery } from 'querystring';

interface ProjectProps {
    page: PrismicDocument;
}

interface Iparams extends ParsedUrlQuery {
    uid: string
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

export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
    const client = createClient({ previewData })
    const { uid } = params as Iparams
    const page = await client.getByUID("projectpage", uid).catch(error => console.error(error));
    return {
        props: {
            "page": page
        }
    }
}


const Project: FC<ProjectProps> = (props) => {
    const { page } = props;
    return (
        <div>
            Out of Order!
            {/* <SliceZone slices={page.data.body} components={components} /> */}
        </div>
    )
}

export default Project