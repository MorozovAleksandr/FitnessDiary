const updateWorkoutCreatePage = (state, action) => {

    if (state === undefined) {
        return {
            workoutCreateMuscleList: [],
            loading: true,
            error: null,
            workoutCreateExerciseList: []
        }
    }

    switch (action.type) {
        case 'FETCH_CREATE_WORKOUT_LIST_REQUEST':
            return {
                workoutCreateMuscleList: [],
                loading: true,
                error: null,
                workoutCreateExerciseList: []
            }
        case 'FETCH_CREATE_WORKOUT_LIST_SUCCESS':
            return {
                workoutCreateMuscleList: action.payload,
                loading: false,
                error: null,
                workoutCreateExerciseList: []
            };
        case 'FETCH_CREATE_WORKOUT_LIST_FAILURE':
            return {
                workoutCreateMuscleList: [],
                loading: false,
                error: action.payload,
                workoutCreateExerciseList: []
            }
        default:
            return state.workoutCreate
    }
}

export default updateWorkoutCreatePage;