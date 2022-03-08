import { GetStaticProps } from 'next';
import { FC } from 'react';
import { createClient } from '../../prismic';

export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
    const client = createClient({ previewData });


    const projectPage = await client.getByUID("ProjectPage", params!.uid);

    return {
        props: {
            projectPage
        }
    }
}


const project: FC = () => {
    return (
        <div>project page</div>
    )
}

export default project