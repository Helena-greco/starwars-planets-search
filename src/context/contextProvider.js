import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import fetchAPI from '../services/fetchAPI';

/** Ref: Consultei no repositório da Bea Ribeiro sobre a requisição API e useEffect */
function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState(planets);
  const [planetName, setPlanetName] = useState('');
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  async function fetchingAPI() {
    const results = await fetchAPI();
    setPlanets(results);
  }

  useEffect(() => {
    fetchingAPI();
  }, []); // componentDidMount

  useEffect(() => {
    setFilter({
      filters: {
        filterByName: {
          name: planetName,
        },
      },
    });

    const filterPlanets = planets.filter((planet) => (planet.name.toLowerCase()
      .includes(planetName.toLowerCase())));
    setFilteredPlanets(filterPlanets);
  }, [planets, planetName]);
  // a renderização do useEffect só precisará ser “reexecutado” caso as dependências mudem.

  const contextValue = {
    planets,
    filter,
    setFilter,
    setPlanetName,
    filteredPlanets,
    fetchingAPI,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
