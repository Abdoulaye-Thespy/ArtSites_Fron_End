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
    const result = await axios.get(`https://13e778afa1c14e269a4d169896b5bc7c.vfs.cloud9.us-east-2.amazonaws.com/artplaces/${id}`);
    const place = result.data;
    setPlace(place);
    setUloading(false);
  }, []);

  return Uloading === true ? (
    <h1>Loading</h1>
  ) : (
    <>
      <section>

        <div>
          <h2>Discover this magnificent place </h2>
        </div>
        <div>
          <div className="container">
            <h1 className="mb-4 text-center">{place.Location}</h1>
            <div className="row">
              <div className="col-md-6 card card-body">
                <img src={place.urlPic} alt="" />
              </div>

              <div className="col-md-6 ">
                <h2>Ingredients</h2>
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
