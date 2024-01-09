function MyMealsAndIngredients({selectedDayProp, updateDayProp}) {

    const editMyMeal = (myInput, value) => {
        updateDayProp({
            ...selectedDayProp,
            [myInput]: value
        })
    }
    if (!selectedDayProp) return <p>Plan your week ahead of time!</p>
    return(
        <div className="whole-plan">
            <input
            type="text"
            className="myInput"
            placeholder="Today is..."
            id="title"
            value={selectedDayProp.title}
            onChange={(e) => editMyMeal("title", e.target.value)}/>

            <textarea
            placeholder="Write your meal plan here"
            id="mealForADay"
            value={selectedDayProp.mealForADay}
            onChange={(e) => editMyMeal("mealForADay", e.target.value)}
            />

            <textarea
            placeholder="List of ingredients"
            id="mealForADay"
            value={selectedDayProp.ingredients}
            onChange={(e) => editMyMeal("ingredients", e.target.value)}
            />
        </div>
    )
}
export default MyMealsAndIngredients;