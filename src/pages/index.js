import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="P3 Physio"
      keywords={[`physio`, `pilates`, `Peak performance physio`]}
    />
    <section>
      <h1>Welcome to Peak Performance Physiotherapy</h1>
      <h3>Neil Warfield MSc BSc (hons) MMACP MIMDPT</h3>
      <p>
        Friendly and enthusiastic Physiotherapist. Neil has experience at senior
        level in the NHS and extensive private experience, working in North
        Cheshire, Central London and Harley Street and at Private Hospitals in
        Buckinghamshire establishing excellent links with local orthopaedic and
        pain specialist consultants.
      </p>
      <p>
        Neil qualified as a Chartered Physiotherapist in 1999 from The
        University of Birmingham and gained a MSc in Neuromusculoskeletal
        physiotherapy from UCL in 2003. He is one of only a small group of
        physiotherapists to have qualified to become both a member of the MACP
        and the McKenzie institute. Both these Post Graduate qualifications
        require extensive training and further exams to ensure the highest
        standards of assessment and treatment are maintained for Clients.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
