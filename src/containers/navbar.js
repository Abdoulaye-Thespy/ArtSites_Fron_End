import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NavBar = () => (
  <>
    <section className="fixed">
      <ul className="nav_items nav">
        <li><i className="fas fa-bars">ii</i></li>
        <li>Art/Culture...</li>
        <li><i className="fas fa-search">ii</i></li>
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
