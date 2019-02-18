import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './about.module.css';
import bgImage from '../images/pilates1.jpg';

const IndexPage = () => (
  <Layout backgroundImage={bgImage}>
    <SEO
      title="Pilates"
      description="P3 Physio, peak performance physiotherapy"
      keywords={[`P3 Physio`, `application`, `react`]}
    />
    <section>
      <h1>Pilates</h1>
      <p>
        I run a group pilates class on Wednesdays: 10-11am and 11.05am-12.05pm
      </p>
      <h3>Venue: Penn Street Village Hall</h3>
      <p>
        Penn Street
        <br />
        Amersham
        <br />
        Bucks
        <br />
        HP7 0PX
      </p>
      <p>
        Village Hall Website:{' '}
        <a href="" target="_blank">
          http://pennstreethall.co.uk/find-us/
        </a>
      </p>
      <p>
        Find us on facebook:{' '}
        <a href="" target="_blank">
          https://www.facebook.com/p3pilates/
        </a>
      </p>
    </section>
  </Layout>
);

export default IndexPage;
