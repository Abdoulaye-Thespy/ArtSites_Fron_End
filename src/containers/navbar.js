import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <>
    <section className="fixed container">
      <ul className="nav_items">
        <li><FontAwesomeIcon icon={faBars} /></li>
        <li>Art/Culture...</li>
        <li><FontAwesomeIcon icon={faSearch} /></li>
      </ul>
    </section>
  </>

);

NavBar.propTypes = {
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
