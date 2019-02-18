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
      <h1>Contact</h1>
      <h3>
        <a href="mailto:neil@p3physio.co.uk">neil@p3physio.co.uk</a> |&nbsp;
        07962150695
      </h3>
      <h3>
        The Rehab Studio
        <br />
        95 Totteridge Lane, High Wycombe, Bucks, HP13 7PH{' '}
      </h3>
      <Accordion>
        <AccordionItem>
          <AccordionItemTitle>
            <h3>Directions</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <p>
              <strong>Directions (from Amersham Hill ?A404):</strong> If you are
              coming up Amersham Hill then go past the RGS (on your left) and
              past the Tesco garage (on your right). Turn right at the second
              mini roundabout to turn on to Totteridge lane. Just past the
              common (which is on your left) you will find Highworth school on
              your right. You need to take the second right after the school
              (first right is no entry). This is signposted ‘Totteridge Lane
              leading to Highworth Close’. You have now arrived. The house is a
              Victorian Semi Detached just to your left. Please feel free to
              park on the drive on your arrival.
            </p>
            <p>
              <strong>
                Directions (from Hazlemere towards High Wycombe ?A404):{' '}
              </strong>
              As you approach Terriers you will pass the Beech Tree Pub which is
              on your left hand side. Go past the Pub and at the 1st
              miniroundabout turn left. You are now on Totteridge Lane. Just
              past the common (which is on your left) you will find Highworth
              school on your right. You need to take the second right after the
              school (first right is no entry). This is signposted ‘Totteridge
              Lane leading to Highworth Close’. You have now arrived. The house
              is a Victorian Semi Detached just to your left. Please feel free
              to park on the drive on your arrival.
            </p>
            <p>
              <strong>Directions from Loudwater/London Road:</strong> Turn Right
              to go up Hatters Lane. Follow the road all the way up and you will
              pass a Tesco Local at the top on your right hand side. Stay on
              this road which changes into Totteridge Lane and you will pass
              straight over 3 mini roundabouts. Pass a pub on your right hand
              side (The Dolphin) and in Approx 200 yards there is a turning on
              your left signposted, ‘Totteridge Lane leading to Highworth
              Close’. You have now arrived. The house is a Victorian Semi
              Detached just to your left. Please feel free to park on the drive
              on your arrival.
            </p>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    </section>
  </Layout>
);

export default IndexPage;
