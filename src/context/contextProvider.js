import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import fetchAPI from '../services/fetchAPI';

/** Ref: Consultei no repositório da Bea Ribeiro sobre a requisição API e useEffect */
function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  async function fetchingAPI() {
    const results = await fetchAPI();
    setPlanets(results);
  }

  useEffect(() => {
    fetchingAPI();
  }, []);

  return (
    <Context.Provider value={ { planets, fetchingAPI } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
