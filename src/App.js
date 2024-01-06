import { useState } from "react";
import uuid from "react-uuid";
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';

function App() {

  const [mealPlans, setMealPlans] = useState([])
  const addMeal = () => {
    //console.log("it works!")
    const newMeal = {
      title: "Today is...",
      id: uuid()
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal)

    const deleteDay = (mealId) => {
      setMealPlans(mealPlans.filter(({id}) => id !== mealId))
    }

  }
  return (
    <div className="App">
      <MyList mealPlansProp={mealPlans} addMealProp={addMeal} deleteDayProp={deleteDay}/>
      <MyMealsAndIngredients/>
    </div>
  );
}
export default App;
