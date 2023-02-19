import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredText, setEnteredText] = useState("");
  const { onLoadIngredient } = props;

  useEffect(() => {
    const query =
      enteredText.length === 0
        ? ""
        : `?orderBy="title"&equalTo="${enteredText}" `;

    fetch(
      "https://react-hooks-update-8e04b-default-rtdb.firebaseio.com/ingredients.json" +
        query
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const loadedIngredientData = [];
        for (const key in responseData) {
          loadedIngredientData.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        onLoadIngredient(loadedIngredientData);
        console.log(loadedIngredientData);
      });
  }, [enteredText, onLoadIngredient]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredText}
            onChange={(event) => setEnteredText(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
