import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { setFilterByNumber,
    filterByNumericValues,
    filterNumbers } = useContext(PlanetsContext);
  return (
    <>
      <label htmlFor="column">
        Coluna
        <select
          data-testid="column-filter"
          value={ filterByNumericValues.column }
          onChange={ (e) => setFilterByNumber({ ...filterByNumericValues,
            column: e.target.value }) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison
        <select
          data-testid="comparison-filter"
          value={ filterByNumericValues.comparison }
          onChange={ (e) => setFilterByNumber({ ...filterByNumericValues,
            comparison: e.target.value }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        value
        <input
          data-testid="value-filter"
          type="number"
          value={ filterByNumericValues.value }
          onChange={ (e) => setFilterByNumber({ ...filterByNumericValues,
            value: e.target.value }) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterNumbers }
      >
        Filtrar
      </button>
    </>
  );
}

export default Filters;
