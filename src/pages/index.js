import React from 'react';
import ReactDOM from 'react-dom';
import bgImage from '../images/physio.jpg';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout backgroundImage={bgImage}>
    <SEO
      title="Home"
      description="P3 Physio"
      keywords={[`physio`, `pilates`, `Peak performance physio`]}
    />
    <section>
      <h1>Welcome to P3 Physiotherapy</h1>
      <p>I offer a range of professional services, including:</p>
      <h3>Physio</h3>
      <p>
        blurb about physio, <a href="/physio">find out more</a>
      </p>
      <h3>Pilates</h3>
      <p>
        blurb about pilates, <a href="/pilates">find out more</a>
      </p>
      <h3>Running analysis</h3>
      <p>
        1 -1 assessment and training programmes carried out at The Rehab Clinic,
        High Wycombe. <a href="/contact">Get in touch to find out more</a>
      </p>
    </section>
  </Layout>
);

export default IndexPage;
