import React from "react";
import { RichText } from "prismic-reactjs";

const ResumeEducationSlice = ({ slice }) => (
  <section>
    <RichText render={slice.primary.Education} />
    <RichText render={slice.primary.EducationDescription} />
  </section>
);

export default ResumeEducationSlice;
