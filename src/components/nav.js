import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import { forEach } from 'iterall';

function Nav() {
  return (
    <StaticQuery
      query={navQuery}
      render={data => {
        let { menuLinks } = data.site.siteMetadata;
        return menuLinks.map((menuLink, i) => {
          return (
            <Link to={`${menuLink.link}`} key={i}>
              {menuLink.name}
            </Link>
          );
        });
      }}
    />
  );
}

export default Nav;

const navQuery = graphql`
  query DefaultNavQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`;
