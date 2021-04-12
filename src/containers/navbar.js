import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <>
    <section className="fixed container">
      <ul className="nav_items">
        <li><FontAwesomeIcon icon={faArrowLeft} className="iconsfont" /></li>
        <li>Art/Culture...</li>
        <li><FontAwesomeIcon icon={faSearch} className="iconsfont" /></li>
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
