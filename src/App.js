import { useEffect, useState } from "react";
import uuid from "react-uuid";
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';

function App() {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])
    const addMeal = () => {
    //console.log("it works!")
    const newMeal = {
      title: "Today is...",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newMeal, ...mealPlans])
    console.log(newMeal)
    }
    const deleteDay = (mealId) => {
      setMealPlans(mealPlans.filter(({id}) => id !== mealId))
    }
    const updateDay = (myUpdatedMeal) => {
      const updatedMeals = mealPlans.map((mealPlan) => {
        if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
        }
        return mealPlan;
      })
      setMealPlans(updatedMeals)
    }
    const getActiveMeal = () => {
      return mealPlans.find(({id}) => id === selectedDay)
    }
  return (
    <div className="App">
      <MyList mealPlansProp={mealPlans} 
      addMealProp={addMeal} 
      deleteDayProp={deleteDay}
      selectedDayProp={selectedDay}
      setSelectedDayProp={setSelectedDay}/>
      <MyMealsAndIngredients
      selectedDayProp ={getActiveMeal()}
      updateDayProp={updateDay}/>
    </div>
  );
}
export default App;
