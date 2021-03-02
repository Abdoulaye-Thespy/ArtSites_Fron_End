import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Place = ({ place }) => (
  <section className="">
    <div className="">
      <img src={place.urlPic} alt={place.Location} />
    </div>
    <div className="">

      <Link
        to={{
          pathname: `/place/${place.id}`,
        }}
        key={place.id}
        className="btn btn-info btn-details"
      >
        <button type="button" className="btn btn-info btn-details">
          Details
        </button>
      </Link>
    </div>
  </section>
);

Place.propTypes = {
  place: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Place;
