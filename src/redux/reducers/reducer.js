import updateWorkoutCreatePage from "./workoutCreateReducer";

const reducer = (state, action) => {
    return {
        workoutCreate: updateWorkoutCreatePage(state, action)
    }
};

export default reducer;