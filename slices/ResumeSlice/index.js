import React from "react";
import { RichText } from "prismic-reactjs";

const ResumeSlice = ({ slice }) => (
  <section>
    <div>
      <RichText render={slice.primary.Name} />
    </div>
    <br />
    <div>
      <RichText render={slice.primary.ObjectiveSection} />
    </div>
  </section>
);

export default ResumeSlice;
