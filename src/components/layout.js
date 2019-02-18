import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children, backgroundImage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className="bg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            minHeight: '100vh'
          }}
        >
          <main>{children}</main>
          <Header siteTitle={data.site.siteMetadata.title} />
          <footer>
            <a href="mailto:neil@p3physio.co.uk">neil@p3physio.co.uk</a> |&nbsp;
            07962150695
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string
};

export default Layout;
