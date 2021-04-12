import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './navbar';

const PlaceDetails = ({ match }) => {
  const [place, setPlace] = useState([]);
  const [Uloading, setUloading] = useState(true);
  useEffect(async () => {
    const { id } = match.params;
    console.log(id);
    const result = await axios.get(`https://frozen-escarpment-12368.herokuapp.com/artplaces/${id}`);
    const place = result.data.data;
    console.log(result);
    setPlace(place);
    setUloading(false);
  }, []);

  return Uloading === true ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div className="container welcome">
        <NavBar className="container-fluid" />
        <h1 className="text-center">{place.Location}</h1>
        <div className="row">
          <div className="col-md-8 card card-body">
            <img src={place.urlPic} alt="" />
          </div>

          <div className="col-md-4">
            <h5 className="details">About this place</h5>
            <p className="details">{place.description}</p>

            <Link to="/" className="text-center">
              <button type="button" className="btn btn-fav">
                BOOKMARK
              </button>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

PlaceDetails.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
