import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import styles from './nav.module.css';

function Nav() {
  return (
    <Menu>
      <StaticQuery
        query={navQuery}
        render={data => {
          let { menuLinks } = data.site.siteMetadata;
          return menuLinks.map((menuLink, i) => {
            return (
              <div key={i} className={styles.menuItem}>
                <Link to={`${menuLink.link}`}>{menuLink.name}</Link>
              </div>
            );
          });
        }}
      />
    </Menu>
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
