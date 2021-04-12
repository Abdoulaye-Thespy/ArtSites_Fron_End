import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => (
  <>
    <section className="fixed container">
      <ul className="nav_items">
        <li>
          <Link to="/places" className="text-center">
            <FontAwesomeIcon icon={faArrowLeft} className="iconsfont" />
          </Link>
        </li>
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
