import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterByName, setFilterByName] = useState({});

  async function getPlanets() {
    setLoading(true);
    const planets = await fetchPlanets();
    setData(planets.results);
    setOtherData(planets.results);
    setLoading(false);
  }

  function filterName(value) {
    const filterData = otherData.filter((elem) => elem.name.includes(value));
    setData(filterData);
    setFilterByName(value);
  }
  const contextValue = {
    data,
    getPlanets,
    loading,
    filterName,
    filterByName,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = ({
  children: PropTypes.arrayOf(PropTypes.string),
}).isRequire;

export default PlanetsProvider;
