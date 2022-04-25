import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [baseData, setBaseData] = useState([]);
  const [filterByName, setFilterByName] = useState({});
  const [columnFilter, setColumnFilter] = useState(['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filterByNumericValues, setFilterByNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [activeFilters, setActiveFilters] = useState([]);

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
    setActiveFilters([...activeFilters, filterByNumericValues]);
    const { column, comparison, value } = filterByNumericValues;
    setColumnFilter(columnFilter.filter((elem) => elem !== column));

    if (comparison === 'maior que') {
      setData(data.filter((elem) => Number(elem[column]) > value));
    }
    if (comparison === 'menor que') {
      setData(data.filter((elem) => Number(elem[column]) < value));
    }
    if (comparison === 'igual a') {
      // só funcionou com Number no value, não entendi o porque, value já não é um número?
      setData(data.filter((elem) => Number(elem[column]) === Number(value)));
    }
  }
  const contextValue = {
    data,
    baseData,
    getPlanets,
    filterName,
    filterByName,
    setFilterByNumber,
    filterByNumericValues,
    filterNumbers,
    columnFilter,
    activeFilters,
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
