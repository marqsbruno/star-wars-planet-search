import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { setFilterByNumber,
    filterByNumericValues,
    filterNumbers,
    columnFilter,
    getPlanets } = useContext(PlanetsContext);

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
          {
            columnFilter.map((elem) => (
              <option key={ elem } value={ elem }>{ elem }</option>
            ))
          }
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
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ getPlanets }
      >
        Remover todas filtragens
      </button>
    </>
  );
}

export default Filters;
