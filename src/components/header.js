import { Link } from 'gatsby';
import Nav from './nav';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <header>
    <a className={styles.logo} />
    <Nav />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
