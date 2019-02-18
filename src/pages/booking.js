import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './contact.module.css';
import bgImage from '../images/run.jpg';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const IndexPage = () => (
  <Layout backgroundImage={bgImage}>
    <SEO
      title="Contact"
      description="Peak performance physiotherapy"
      keywords={[`P3 Physio`, `application`, `react`]}
    />

    <section>
      <h1>Booking</h1>
      <h3>How to book an appointment:</h3>
      <p>
        We accept self-referrals, referrals from most major insurance companies,
        referrals from GPS and referrals from consultants.
      </p>
      <h3>Insured patients:</h3>
      <p>
        To use your health insurance you may or may not be required to see your
        GP or a consultant first. Please check this with your insurer prior to
        booking as we can’t find this information out for you. You will need to
        obtain an authorisation number prior to commencing your physiotherapy
        sessions. P3 Physiotherapy is registered with most major health
        insurers:
      </p>
      <ul>
        <li>Insurance Company P3s Provider number</li>
        <li>BUPA</li>
        <li>AXA PPP </li>
        <li>Cigna</li>
        <li>Simply Health </li>
        <li>AVIVA</li>
        <li>Healix</li>
        <li>Vitality Health </li>
      </ul>
      <p>
        We are required to meet the highest service standards in order to
        maintain provider status and communicate with the insurer on your behalf
        where required to provide feedback reports.{' '}
      </p>
      <p>
        <strong>Please note:</strong> We have chosen not to work with 1 or 2
        insurers as we feel the limited level of physiotherapy they offer
        compromises the service we can offer you. If your insurer is not listed
        above please feel free to contact us as the companies we work with
        change from time to time.{' '}
      </p>
      <h3>Self pay fees:</h3>
      <ul>
        Current tariffs from 1.2.19 are:
        <li>NP (45min appointment) £50 (discounted for pay on day to £45).</li>
        <li>
          Follow up (30 min appointment) £40 (discounted for pay on day to £35).
        </li>
      </ul>

      <h3>Clinic letters:</h3>
      <p>
        We seek to communicate with your Consultant, GP, Employer and insurer
        where appropriate but only do so with your consent. Depending on the
        type of report required there may be an additional charge for this
        service.
      </p>

      <h3>Cancellation Policy:</h3>
      <p>
        Late cancellations (less than 24 hours notice) or no shows (DNA…did not
        attend). Our policy for DNAs or very late cancellations is to charge for
        this appointment in full . Unfortunately most insurance will not cover
        this cost and it will be passed to the individual who has missed the
        appointment.{' '}
      </p>
      <p>
        Obviously emergencies happen and keep us informed if you do need to
        change or postpone appointments please.{' '}
      </p>
    </section>
  </Layout>
);

export default IndexPage;
