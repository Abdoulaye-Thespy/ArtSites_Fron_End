import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      <section className="">
        <div className="container welcome">
          <h1 className="text-center">{place.Location}</h1>
          <div className="row">
            <div className="col-md-8 card card-body">
              <img src={place.urlPic} alt="" />
            </div>

            <div className="col-md-4 ">
              <h2>Description</h2>
              <ul className="ingredients">
                <li className="item">
                  {place.description}
                </li>
              </ul>
              <h2 className="instructions">Instructions</h2>
            </div>
          </div>
          <Link to="/" className="text-center">
            <button type="button" className="btn btn-info btn-details">
              Back to Menu
            </button>
          </Link>
        </div>

      </section>

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
