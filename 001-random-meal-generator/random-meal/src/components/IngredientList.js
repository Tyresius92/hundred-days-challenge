import React from "react";

const IngredientList = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={`${ingredient}_${index}`}>{ingredient}</li>
      ))}
    </ul>
  );
};

export default IngredientList;
