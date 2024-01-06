const MyList = ({addMealProp, mealPlansProp, deleteDayProp}) => {
    return(
        <div>
        <div>
            <h1>Weekly Meal Plan</h1>
            <button className="button-add" onClick={addMealProp}>Add</button>
        </div>
        <div>
            {mealPlansProp.map(({id, title}) => (
                <div>
                    <p>{title}</p>
                    <button className="button-delete" onClick={() => deleteDayProp(id)}>Delete</button>
                </div>
            ))}
        </div>
        </div>
    )
}
export default MyList;