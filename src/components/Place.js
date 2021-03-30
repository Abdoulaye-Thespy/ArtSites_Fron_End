import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Place = ({ place }) => (
  <div className="card">
    <div className="">
      <img src={place.urlPic} alt={place.Location} />
    </div>
    <div className="">
      <h2>{place.Location}</h2>

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
  </div>
);

Place.propTypes = {
  place: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Place;
