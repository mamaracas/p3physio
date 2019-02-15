import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="P3 Physio"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Hi people</h1>
    <p />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
);

export default IndexPage;
