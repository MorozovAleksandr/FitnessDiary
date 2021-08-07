const updateWorkoutCreateMuscleList = (state, action) => {
    if (state === undefined) {
        return {
            activeItem: null
        }
    }

    switch (action.type) {
        case 'CLICK_MUSCLE_ITEM':
            return {
                activeItem: action.payload
            }
        default:
            return state.workoutCreateMuscleList
    }
}

export default updateWorkoutCreateMuscleList;