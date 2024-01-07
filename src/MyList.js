const MyList = ({addMealProp, mealPlansProp, 
    deleteDayProp, selectedDayProp, setSelectedDayProp}) => {
    return(
        <div>
        <div>
            <h1>Weekly Meal Plan</h1>
            <button className="button-add" onClick={addMealProp}>Add</button>
        </div>
        <div>
            {mealPlansProp.map(({id, title, mealForADay}) => (
                <div className={`meal ${id === selectedDayProp ? "selected" : "default"}`}
                onClick={() => setSelectedDayProp(id)}>
                    <p className="title">{title}</p>
                    <p>{mealForADay}</p>
                    <button className="button-delete" onClick={() => deleteDayProp(id)}>Delete</button>
                </div>
            ))}
        </div>
        </div>
    )
}
export default MyList;