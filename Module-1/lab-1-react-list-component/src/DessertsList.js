const DessertsList = ({ desserts }) => {
  const lessCalories = desserts
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => <li>{dessert.name} - {dessert.calories} cal</li>);

  return <ul>{lessCalories}</ul>
}

export default DessertsList;