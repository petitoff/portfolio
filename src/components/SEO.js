import * as React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Default site description" />
    </Helmet>
  );
};

export default SEO;
