import React, { useState } from "react";
import axios from "axios";
import RecipeButtonCard from "./components/RecipeButtonCard";
import Navbar from "./components/Navbar";
import RecipeCard from "./components/RecipeCard";

const RECIPE_API_ENDPOINT =
  "https://www.themealdb.com/api/json/v1/1/random.php";

const mapResponseToProps = (response) => {
  const meal = response?.data?.meals?.[0];

  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const measureKey = `strMeasure${i}`;
    const ingredientKey = `strIngredient${i}`;

    const measure = meal[measureKey];
    const ingredient = meal[ingredientKey];

    if (!!measure && !!ingredient && measure !== " " && ingredient !== " ") {
      ingredients = [...ingredients, `${measure} ${ingredient}`];
    }
  }

  const result = {
    id: Number(meal.idMeal),
    name: meal.strMeal,
    instructions: meal.strInstructions,
    thumbnailImage: meal.strMealThumb,
    video: meal.strYoutube,
    ingredients,
    source: meal.strSource,
  };
  return result;
};

const App = () => {
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = () => {
    axios
      .get(RECIPE_API_ENDPOINT)
      .then((response) => {
        console.log(response);
        setRecipe(mapResponseToProps(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          margin: "auto",
          width: "75%",
          minWidth: "300px",
        }}
      >
        <RecipeButtonCard
          style={{ margin: "auto" }}
          clickHandler={fetchRecipe}
        />
        {recipe && <RecipeCard recipe={recipe} />}
      </div>
    </>
  );
};

export default App;
