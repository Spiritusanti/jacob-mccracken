import { createClient } from '../../prismicio';

export const getStaticProps= async ({ params, previewData }) => {
    const client = createClient({ previewData });


    const projectPage = await client.getByUID("ProjectPage", params.uid);

    return {
        props: {
            projectPage
        }
    }
}


const project = (props) => {
    return (
        <div>{props.projectPage}</div>
    )
}

export default project