import React from 'react';
import '../style.css';

function FilterNumbers() {
  const select1 = ['population', 'orbital period', 'diameter',
    'rotation period', 'surface water'];

  return (
    <div>
      <select data-testid="column-filter" className="filter">
        { select1.map((optionValue, index) => (
          <option key={ index }>{optionValue}</option>
        )) }
      </select>
      <select data-testid="comparison-filter" className="filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input type="number" data-testid="value-filter" className="filter" />
      <button
        type="button"
        data-testid="button-filter"
        className="filter-btn"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumbers;
