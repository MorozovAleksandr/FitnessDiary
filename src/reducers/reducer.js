import updateWorkoutCreateMuscleList from "./workoutCreateMuscleListReducer";
import updateWorkoutCreatePage from "./workoutCreateReducer";

const reducer = (state, action) => {
    return {
        workoutCreate: updateWorkoutCreatePage(state, action),
        workoutCreateMuscleList: updateWorkoutCreateMuscleList(state, action),
    }
};

export default reducer;