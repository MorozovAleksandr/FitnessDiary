const workoutCreatePageRequested = () => {
    return {
        type: 'FETCH_CREATE_WORKOUT_LIST_REQUEST'
    };
};

const workoutCreatePageLoaded = (newWorkoutCreatePage) => {
    return {
        type: 'FETCH_CREATE_WORKOUT_LIST_SUCCESS',
        payload: newWorkoutCreatePage
    };
};

const workoutCreatePageError = (error) => {
    return {
        type: 'FETCH_CREATE_WORKOUT_LIST_FAILURE',
        payload: error
    };
};

const onClickWorkoutListItem = (id) => {
    return {
        type: 'CLICK_MUSCLE_ITEM',
        payload: id
    }
}


const fetchWorkoutCreatePage = (fitnessDiaryService, dispatch) => () => {
    dispatch(workoutCreatePageRequested());
    fitnessDiaryService.getMuscleGroup()
        .then((data) => {
            dispatch(workoutCreatePageLoaded(data));
        })
        .catch((err) => {
            dispatch(workoutCreatePageError(err));
        });
};

export {
    fetchWorkoutCreatePage,
    onClickWorkoutListItem
}