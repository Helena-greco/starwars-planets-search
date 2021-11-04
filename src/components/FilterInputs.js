import React, { useContext } from 'react';
import Context from '../context/context';
import '../style.css';

function FilterInputs() {
  const { setPlanetName } = useContext(Context);

  function handleFilterChange({ target: { value } }) {
    setPlanetName(value);
  }

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        className="name-filter"
        placeholder="Filtrar por nome"
        onChange={ handleFilterChange }
      />
    </div>
  );
}

export default FilterInputs;
