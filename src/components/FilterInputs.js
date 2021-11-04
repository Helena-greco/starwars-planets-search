import React, { useContext } from 'react';
import Context from '../context/context';

function FilterInputs() {
  const { handleFilterChange } = useContext(Context);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtrar por nome"
        onChange={ handleFilterChange }
      />
    </div>
  );
}

export default FilterInputs;
