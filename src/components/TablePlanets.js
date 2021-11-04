import React, { useContext } from 'react';
import Context from '../context/context';
import '../style.css';

function TablePlanets() {
  const { filteredPlanets } = useContext(Context);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {
          filteredPlanets.map((line, index) => (
            <tr key={ index }>
              <td>{ line.name }</td>
              <td>{ line.rotation_period }</td>
              <td>{ line.orbital_period }</td>
              <td>{ line.diameter }</td>
              <td>{ line.climate }</td>
              <td>{ line.gravity }</td>
              <td>{ line.terrain }</td>
              <td>{ line.surface_water }</td>
              <td>{ line.population }</td>
              <td>
                { line.films.map((film, i) => (
                  <a href={ film } key={ i }>{film}</a>
                )) }
              </td>
              <td>{ line.created }</td>
              <td>{ line.edited }</td>
              <td>
                <a href={ line.url }>
                  {line.url}
                </a>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default TablePlanets;
