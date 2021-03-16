import { useState } from "react";
import Basket from "./components/Basket";
import Groceries from "./components/Groceries";
import "./grocery.css";

let originalBasket = [];
const groceriesArrStatic = [
  "Strawberry",
  "Blueberry",
  "Orange",
  "Banana",
  "Apple",
  "Carrot",
  "Celery",
  "Mushroom",
  "Green Pepper",
  "Eggs",
  "Cheese",
  "Butter",
  "Chicken",
  "Beef",
  "Pork",
  "Fish",
  "Rice",
  "Pasta",
  "Bread",
];

function App() {
  const [basketArr, setBasket] = useState([]);
  const [groceriesArr, setGroceriesArr] = useState([
    "Strawberry",
    "Blueberry",
    "Orange",
    "Banana",
    "Apple",
    "Carrot",
    "Celery",
    "Mushroom",
    "Green Pepper",
    "Eggs",
    "Cheese",
    "Butter",
    "Chicken",
    "Beef",
    "Pork",
    "Fish",
    "Rice",
    "Pasta",
    "Bread",
  ]);

  originalBasket =
    originalBasket.length < basketArr.length ? [...basketArr] : originalBasket;

  const originalGroceries = [...groceriesArrStatic];

  function filterSearch(e) {
    const text = e.target.value;
    if (text === "") {
      setGroceriesArr(originalGroceries);
      setBasket(originalBasket);
      return;
    } else {
      const filteredGroceriesArray = originalGroceries.filter((value) =>
        value.match(text)
      );
      setGroceriesArr(filteredGroceriesArray);
      const filteredBasketArray = originalBasket.filter((object) =>
        object.name.match(text)
      );
      setBasket(filteredBasketArray);
      return;
    }
  }

  return (
    <div className="App">
      <header className="App-header"> </header>
      <input onChange={filterSearch} className="search"></input>
      <div className="lists-Container">
        <Groceries
          basketArr={basketArr}
          setBasket={setBasket}
          groceriesArr={groceriesArr}
        />
        <div className="basket">
        <button onClick={() => setBasket([])} className="trash">
          🗑️
        </button>
        <Basket basketArr={basketArr} />
        </div>
      </div>
    </div>
  );
}

export default App;
