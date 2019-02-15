import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import styles from './about.module.css';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Pilates"
      description="P3 Physio, peak performance physiotherapy"
      keywords={[`P3 Physio`, `application`, `react`]}
    />

    <h1 className={styles.test}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/" />
  </Layout>
);

export default IndexPage;
