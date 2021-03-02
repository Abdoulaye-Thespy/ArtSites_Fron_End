import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const PlacesList = [];
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    Array.prototype.push.apply( PlacesLis, result.data.meals);
    setPlaces( PlacesList);
    setLoading(false);
  }, []);

  return loading === true ? (
    <h2>Loading....</h2>
  ) : (
    <>
      <section>


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
          <>
        </div>

      </section>

    </>
  );
};

Places.propTypes = {
};

const mapStateToProps = ()=> ({

});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);