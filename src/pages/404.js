import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import bgImage from '../images/run.jpg';

const NotFoundPage = () => (
  <Layout backgroundImage={bgImage}>
    <SEO
      title="404: Not found"
      description="404"
      keywords={[`physio`, `pilates`, `Peak performance physio`]}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
);

export default NotFoundPage;
