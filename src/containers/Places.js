import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Place from '../components/Place';
import Aside from '../components/aside';

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    console.log('xxxx');
    const result = await axios.get('https://frozen-escarpment-12368.herokuapp.com/artplaces');
    const results = result.data.data;
    setPlaces(results);
    console.log(places);
    console.log(results);
    console.log(result);
    setLoading(false);
  }, []);

  return loading === true ? (
    <h2>Loading....</h2>
  ) : (
    <>

      <div className="container-fluid places">
        <div className="row">
          <div className="col-sm-3">

            <Aside />
          </div>
          <div className="col-sm-9">

            <section>

              <h2 className="">
                Beuautiful place to visit
              </h2>
              <div className="recettes">
                {places.map(lieu => (
                  /* eslint-disable no-debugger, max-len */
                  <Place key={lieu.id} place={lieu} />
                ))}
              </div>

            </section>
          </div>
        </div>
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
