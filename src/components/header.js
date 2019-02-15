import { Link } from 'gatsby';
import Nav from './nav';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div>
      <Nav />
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        {siteTitle}
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
