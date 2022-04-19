import React, { useContext, useEffect } from 'react';
import PlanetsContext from './context/PlanetsContext';

function Table() {
  const { getPlanets, data } = useContext(PlanetsContext);
  useEffect(() => {
    getPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Orbital period</th>
            <th>Population</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th>url</th>
          </tr>
        </tbody>
        {
          data.map((elem) => (
            <tbody key={ elem.name }>
              <tr>
                <td>{ elem.name }</td>
                <td>{ elem.climate }</td>
                <td>{ elem.created }</td>
                <td>{ elem.diameter }</td>
                <td>{ elem.edited }</td>
                <td>{ elem.films }</td>
                <td>{ elem.gravity }</td>
                <td>{ elem.orbital_period }</td>
                <td>{ elem.population }</td>
                <td>{ elem.rotation_period }</td>
                <td>{ elem.surface_water }</td>
                <td>{ elem.terrain }</td>
                <td>{ elem.url }</td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </div>
  );
}

export default Table;
