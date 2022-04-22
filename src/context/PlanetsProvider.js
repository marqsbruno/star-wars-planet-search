import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [baseData, setBaseData] = useState([]);
  const [filterByName, setFilterByName] = useState({});
  const [filterByNumericValues, setFilterByNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  async function getPlanets() {
    const planets = await fetchPlanets();
    setData(planets.results);
    setBaseData(planets.results);
  }

  function filterName(value) {
    const filterData = baseData.filter((elem) => elem.name.includes(value));
    setData(filterData);
    setFilterByName(value);
  }

  function filterNumbers() {
    const { column, comparison, value } = filterByNumericValues;
    if (comparison === 'maior que') {
      const filter1 = data.filter((elem) => Number(elem[column]) > value);
      setData(filter1);
    }
    if (comparison === 'menor que') {
      const filter2 = data.filter((elem) => Number(elem[column]) < value);
      setData(filter2);
    }
    if (comparison === 'igual a') {
      const filter3 = data.filter((elem) => Number(elem[column]) === Number(value));
      // só funcionou com Number no value, não entendi o porque, value já não é um número?
      setData(filter3);
    }
  }
  const contextValue = {
    data,
    getPlanets,
    filterName,
    filterByName,
    setFilterByNumber,
    filterByNumericValues,
    filterNumbers,
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
