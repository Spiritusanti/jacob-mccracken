import React from "react";
import { RichText } from "prismic-reactjs";

const ResumeExperienceSlice = ({ slice }) => (
  <section>
    <RichText render={slice.primary.Experience} />
    <RichText render={slice.primary.WorkExperienceDescription} />
  </section>
);

export default ResumeExperienceSlice;
