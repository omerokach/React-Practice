import React from "react";
import Grocery from "./Grocery";

// const groceriesArr = [
//   "Strawberry",
//   "Blueberry",
//   "Orange",
//   "Banana",
//   "Apple",
//   "Carrot",
//   "Celery",
//   "Mushroom",
//   "Green Pepper",
//   "Eggs",
//   "Cheese",
//   "Butter",
//   "Chicken",
//   "Beef",
//   "Pork",
//   "Fish",
//   "Rice",
//   "Pasta",
//   "Bread",
// ];

function Groceries(props) {
  const { basketArr } = props;
  const { setBasket } = props;
  const{groceriesArr} = props

  function addNewItem(event) {
    const item = event.target.innerText.slice(1)
    const tempBasket = [...basketArr];
    if (
        tempBasket.some((grocery) => {
        if(grocery.name === item){
            grocery.count += 1;
            setBasket([...tempBasket]);
            return true;
        }
      })
    ){
        return;
    }
      setBasket([...basketArr, { name: item, count: 1 ,deleted:false }]);
  }

  return (
    <div>
      <div className="groceries-header"> Groceries</div>
      <ul className="groceries">
        {groceriesArr.map((grocery ,i) => (
          <Grocery
            name={grocery}
            setBasket={setBasket}
            basketArr={basketArr}
            onClickFunction={addNewItem}
            key={`groceries-${i}`}
          />
        ))}
      </ul>
    </div>
  );
}

export default Groceries;
