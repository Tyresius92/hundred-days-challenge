import React from "react";
import { AnchorButton } from "@blueprintjs/core";
import Card from "./Card";
import IngredientList from "./IngredientList";

const RecipeCard = ({ recipe }) => {
  return (
    <Card title={recipe.name}>
      <div
        style={{
          width: "50%",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        <img
          style={{ width: "80%", margin: "auto" }}
          src={recipe.thumbnailImage}
          alt={recipe.name}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <IngredientList ingredients={recipe.ingredients} />
      </div>
      <div>
        <ol>
          {recipe.instructions.split("\n").map((step, stepNum) => {
            return step && <li key={stepNum}>{step}</li>;
          })}
        </ol>
      </div>
      <hr />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <AnchorButton href={recipe.video}>
          Learn to make it on YouTube
        </AnchorButton>
      </div>
      <div style={{ textAlign: "right" }}>
        <a href={recipe.source}>Recipe Source</a>
      </div>
    </Card>
  );
};

export default RecipeCard;
