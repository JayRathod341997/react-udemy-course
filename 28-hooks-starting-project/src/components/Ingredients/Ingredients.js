import React from "react";

import { useReducer, useEffect, useCallback } from "react";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModel from "../UI/ErrorModal";
import Search from "./Search";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((item) => item.id !== action.id);
    default:
      throw new Error("Not implemented");
  }
};

const httpsReducer = (currHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: false };
    case "RESPONSE":
      return { ...currHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMessage };
    case "CLEAR":
      return { ...currHttpState, error: null };
    default:
      throw new Error("Not implemented");
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [userIngredients, setUserIngredients] = useState([]);

  const [httpState, dispatchHttp] = useReducer(httpsReducer, {
    loading: false,
    error: null,
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const filteredIngredientHandler = useCallback((filteredIngredient) => {
    // setUserIngredients(filteredIngredient);
    dispatch({ type: "SET", ingredients: filteredIngredient });
  }, []);

  useEffect(() => {
    console.log("USER EFFECTED");
  });

  const addingIngredientHandler = (ingredient) => {
    // setIsLoading(true);

    fetch(
      "https://react-hooks-update-8e04b-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { contentType: "application/json" },
      }
    )
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" });
        // setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        // setUserIngredients((prevIngredient) => [
        //   ...prevIngredient,
        //   { id: responseData.name, ...ingredient },
        // ]);,
        dispatch({
          type: "ADD",
          ingredient: { id: responseData.name, ...ingredient },
        });
      });
  };

  const removeIngredientHandler = (ingredientId) => {
    // setIsLoading(true);
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://react-hooks-update-8e04b-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        dispatchHttp({ type: "RESPONSE" });
        // setIsLoading(false);
        // setUserIngredients((prevIngredient) =>
        //   prevIngredient.filter((ingredient) => ingredient.id !== ingredientId)
        // );
        dispatch({ type: "DELETE", id: ingredientId });
      })
      .catch((err) => {
        dispatchHttp({ type: "ERROR", errorMessage: "Something went wrong" });
        // setError("Something went wrong");
      });
  };

  const clearError = () => {
    dispatchHttp({ type: "CLEAR" });
    // setError(null);
    // setIsLoading(false);
  };

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModel onClose={clearError}> {httpState.error}</ErrorModel>
      )}

      <IngredientForm
        onAddIngredient={addingIngredientHandler}
        onLoading={httpState.loading}
      />

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
