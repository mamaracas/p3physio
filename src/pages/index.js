import React from 'react';
import ReactDOM from 'react-dom';

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
  <Layout>
    <SEO
      title="Home"
      description="P3 Physio"
      keywords={[`physio`, `pilates`, `Peak performance physio`]}
    />
    <section>
      <h1>Welcome to P3 Physiotherapy</h1>
      <h3>Neil Warfield MSc BSc (hons) MMACP MIMDPT</h3>
      <p>
        Friendly and enthusiastic Physiotherapist. Neil has experience at senior
        level in the NHS and extensive private experience, working in North
        Cheshire, Central London and Harley Street and at Private Hospitals in
        Buckinghamshire establishing excellent links with local orthopaedic and
        pain specialist consultants. Neil qualified as a Chartered
        Physiotherapist in 1999 from The University of Birmingham and gained a
        MSc in Neuromusculoskeletal physiotherapy from UCL in 2003. He is one of
        only a small group of physiotherapists to have qualified to become both
        a member of the MACP (Musculoskeletal Association of Physiotherapists)
        and the McKenzie institute. Both these Post Graduate qualifications
        require extensive training and further exams to ensure the highest
        standards of assessment and treatment are maintained for Clients.
      </p>
      <p>
        Neil’s experience over the last 19 years has seen him develop expertise
        in a wide range of conditions:
      </p>

      <Accordion>
        <AccordionItem expanded={true}>
          <AccordionItemTitle>
            <h3>Upper Limb</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Whilst working in North Cheshire Neil worked closely with Shoulder
              and upper limb surgeons to develop advanced skills in upper limb
              Rehabilitation and assessment. Neil worked as a physio specialist
              as part of the North West Upper limb group led by Surgeon Len Funk
              (shoulderdoc.co.uk)
            </p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>Lower Limb</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              Neil is a qualified running technique coach and as such using his
              advanced knowledge in lower limb injuries and rehabilitation (for
              more information see P3 running). He has worked with elite
              athletes , including Bucks speed demons and has previously
              developed orthotics services and running assessment clinics for
              Private hospitals in South Buckinghamshire.
            </p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>Spinal (back and neck) Physiotherapy</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              As an Advanced Physio Practioner in the NHS Neil has also combined
              his advanced training in spinal assessment and treatment along
              with his qualification as a Pilates instructor and qualifications
              in Acupuncture to provide the highest standard of spinal treatment
              and rehabilitation. Working in Harley street with elite athletes
              physio Neil gained excellent experience in using Pilates in the
              clinical setting.
            </p>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>Links with other Specialists</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              As part of being a specialist it is important to recognise
              limitations and develop links with other professions. If following
              assessment and diagnosis it is felt that other professions can aid
              your recovery to complement physiotherapy then Neil has excellent
              links with orthopaedic surgeons around the local area along with
              links with pain specialist nurses and consultants who can be
              referred to if required. Neil also works with osteopaths and
              sports rehabilitators to provide a full individual service from
              injury to recovery and health.
            </p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </section>
  </Layout>
);

export default IndexPage;
