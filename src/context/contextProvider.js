import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import fetchAPI from '../services/fetchAPI';

/** Ref: Consultei no repositório da Bea Ribeiro sobre a requisição API e useEffect */
function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilter] = useState({ filterByName: { name: '' } });

  async function fetchingAPI() {
    const results = await fetchAPI();
    setPlanets(results);
  }

  function handleFilterChange({ target }) {
    if (target.value === '') {
      setPlanets(planets);
    } else {
      const filterPlanets = planets.filter((planet) => planet.name.toLowerCase()
        .includes(target.value.toLowerCase()));
      setFilter({
        ...filters,
        filterByName: { name: target.value },
      });
      setPlanets(filterPlanets);
    }
  }

  useEffect(() => {
    fetchingAPI();
  }, []);

  return (
    <Context.Provider value={ { planets, fetchingAPI, handleFilterChange } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
