"use client"

import React from 'react';
import useIngredients from '../hooks/useIngredients';

const IngredientList: React.FC = () => {
  const { ingredients, loading, error } = useIngredients();
  console.log('ingredients', ingredients)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Ingredients List</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;