const workoutCreatePageRequestedAC = () => {
    return {
        type: 'FETCH_CREATE_WORKOUT_LIST_REQUEST'
    };
};

const workoutCreatePageLoadedAC = (newWorkoutCreatePage) => {
    return {
        type: 'FETCH_CREATE_WORKOUT_LIST_SUCCESS',
        payload: newWorkoutCreatePage
    };
};

const workoutCreatePageErrorAC = (error) => {
    return {
        type: 'FETCH_CREATE_WORKOUT_LIST_FAILURE',
        payload: error
    };
};

const onClickWorkoutListItemAC = (exerciseList) => {
    return {
        type: 'CLICK_MUSCLE_ITEM',
        payload: exerciseList
    }
}

const toggleExerciseItemCheckboxAC = (exerciseItemId) => {
    return {
        type: 'TOGGLE_EXERCISE_ITEM_CHECKBOX',
        payload: exerciseItemId
    }
}

const toggleExerciseItemAC = (exerciseItemId) => {
    return {
        type: 'TOGGLE_EXERCISE_ITEM',
        payload: exerciseItemId
    }
}

const showFormExerciseParametersAC = (showStatus, exerciseItemId) => {
    return {
        type: 'SHOW_FORM_EXERCISE_PARAMETERS',
        payload: showStatus,
        id: exerciseItemId
    }
}

const saveFormExerciseParametersAC = (exerciseItemId, exerciseParameters) => {
    return {
        type: 'SAVE_FORM_EXERCISE_PARAMETERS',
        payload: exerciseItemId,
        parameters: exerciseParameters
    }
}

const fetchWorkoutCreatePage = (fitnessDiaryService, dispatch) => () => {
    dispatch(workoutCreatePageRequestedAC());
    fitnessDiaryService.getMuscleGroup()
        .then((data) => {
            dispatch(workoutCreatePageLoadedAC(data));
        })
        .catch((err) => {
            dispatch(workoutCreatePageErrorAC(err));
        });
};

export {
    fetchWorkoutCreatePage,
    onClickWorkoutListItemAC,
    toggleExerciseItemCheckboxAC,
    toggleExerciseItemAC,
    showFormExerciseParametersAC,
    saveFormExerciseParametersAC
}