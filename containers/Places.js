import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Recettes = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const PlacesList = [];
    const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    Array.prototype.push.apply( PlacesList, result.data.meals);
    setPlaces( PlacesLis);
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
            <h2>{lie98uy7t21`.
            asw3.Location}</h2>
            </li>
    
          ))}
          <>
        </div>

      </section>

    </>
  );
};

Recettes.propTypes = {
  category: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.Filtering,
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: param => dispatch(filterBook(param)),
  showDetails: param => dispatch(getrecette(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recettes);