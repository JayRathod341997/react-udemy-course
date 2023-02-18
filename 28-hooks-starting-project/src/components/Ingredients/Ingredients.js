import React from "react";

import { useState } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const addingIngredientHandler = (ingredient) => {
    setUserIngredients((prevIngredient) => [
      ...prevIngredient,
      { id: Math.random().toString(), ...ingredient },
    ]);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addingIngredientHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={() => {}}
        ></IngredientList>
      </section>
    </div>
  );
}

export default Ingredients;
