import React from "react";
import Card from "./Card";
import { Button } from "@blueprintjs/core";

const RecipeButtonCard = ({ clickHandler }) => {
  return (
    <Card textAlign="center">
      <Button onClick={clickHandler}>Get Recipe!</Button>
    </Card>
  );
};

export default RecipeButtonCard;
