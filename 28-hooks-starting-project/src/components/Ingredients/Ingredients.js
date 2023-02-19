import React from "react";

import { useState, useEffect, useCallback } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const filteredIngredientHandler = useCallback((filteredIngredient) => {
    setUserIngredients(filteredIngredient);
  }, []);

  useEffect(() => {
    console.log("USER EFFECTED");
  });

  const addingIngredientHandler = (ingredient) => {
    fetch(
      "https://react-hooks-update-8e04b-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { contentType: "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredient) => [
          ...prevIngredient,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  const removeIngredientHandler = (ingredientId) => {
    fetch(
      `https://react-hooks-update-8e04b-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setUserIngredients((prevIngredient) =>
        prevIngredient.filter((ingredient) => ingredient.id !== ingredientId)
      );
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addingIngredientHandler} />

      <section>
        <Search onLoadIngredient={filteredIngredientHandler} />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        ></IngredientList>
      </section>
    </div>
  );
}

export default Ingredients;
