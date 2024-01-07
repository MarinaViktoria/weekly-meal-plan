function MyMealsAndIngredients(selectedDayProp, updateDayProp) {

    const editMyMeal = (myInput, value) => {
        updateDayProp({
            ...selectedDayProp,
            [myInput]: value
        })
    }
    if (selectedDayProp) return <p>Plan your week ahead of time!</p>
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
            />

            <textarea
            placeholder="List of ingredients"
            />
        </div>
    )
}
export default MyMealsAndIngredients;