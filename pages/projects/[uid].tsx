import { createClient } from '../../prismicio';
import { PrismicDocument } from '@prismicio/types';
import { FC } from 'react';
import { GetStaticProps } from 'next';
import { SliceZone } from '@prismicio/react';
import { ParsedUrlQuery } from 'querystring';
import { components } from "../../slices/index";

interface ProjectProps {
    page: PrismicDocument;
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


interface Iparams extends ParsedUrlQuery {
    uid: string
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


    let content;
    if(page) {
        content = <SliceZone slices={page.data.body} components={components} />
    }

    if(page === undefined) {
        content = <h1>Loading....</h1>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Project