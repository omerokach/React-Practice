import Grocery from "./Grocery";

function Basket(props) {
  const { basketArr } = props;

  function ifDeleted(e) {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  }

  return (
    <div>
      <div className="groceries-header"> Basket</div>
      <ul className="groceries">
        {basketArr.map((grocery, i) => (
          <Grocery
            name={grocery.name}
            count={grocery.count}
            deleted={grocery.deleted}
            onClickFunction={ifDeleted}
            key={`basket-${i}`}
          />
        ))}
      </ul>
    </div>
  );
}

export default Basket;
