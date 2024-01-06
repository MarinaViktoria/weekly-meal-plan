function MyMealsAndIngredients() {
    return(
        <div className="whole-plan">
            <input
            type="text"
            className="myInput"
            placeholder="Today is..."/>

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