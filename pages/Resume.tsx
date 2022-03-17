import { SliceZone } from "@prismicio/react";
import { PrismicDocument } from "@prismicio/types";
import { GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import { createClient } from "../prismicio";
import { components } from "../slices";


export const getStaticProps: GetStaticProps = async ({ previewData }) => {
    const client = createClient({ previewData });
    const ResumePage = await client
        .getSingle("resume")
        .catch((error) => console.error(error));
    return {
        
        props: {
            ResumePage,
        },
    };
};

interface ResumeProps {
    ResumePage: PrismicDocument;
}


const Resume: NextPage<ResumeProps> = (props) => {
    const { ResumePage } = props;
    const resume = ResumePage.data.slices;
    return (
        <Fragment>
            <SliceZone slices={resume} components={components} />
        </Fragment>
    )
}

export default Resume;