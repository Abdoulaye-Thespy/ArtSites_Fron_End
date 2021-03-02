import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const PlacesList = [];
    const result = await axios.get('https://frozen-escarpment-12368.herokuapp.com/artplaces/');
    Array.prototype.push.apply(PlacesList, result.data.meals);
    setPlaces(PlacesList);
    setLoading(false);
  }, []);

  return loading === true ? (
    <h2>Loading....</h2>
  ) : (
    <>

      <h2 className="">
        Beautiful places for you to visit
      </h2>
      <div className="places">
        <ul>
          {places.map(lieu => (
            <li key={lieu.id}>
              <img src={lieu.urlPic} alt={lieu.description} />
              <h2>{lieu.Location}</h2>
            </li>

          ))}
        </ul>

      </div>

    </>
  );
};

Places.propTypes = {
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
