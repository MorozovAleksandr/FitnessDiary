const updateNewWorkout = (state, exerciseItemId, parameters = null) => {

    const { workoutCreate: { newWorkoutCreact, workoutCreateExerciseList } } = state;
    let updateNewWorkoutCreate = null;
    const idx = newWorkoutCreact.findIndex(item => item.id === exerciseItemId);

    if ((idx === -1) && (parameters === null)) {
        const exerciseItem = workoutCreateExerciseList.find(item => item.id === exerciseItemId);
        const updateExerciseItem = {
            ...exerciseItem,
            approaches: 0,
            repeat: 0,
            weight: 0
        };
        updateNewWorkoutCreate = [...newWorkoutCreact, updateExerciseItem];
    }

    if ((idx > -1) && (parameters === null)) {
        updateNewWorkoutCreate = [
            ...newWorkoutCreact.slice(0, idx),
            ...newWorkoutCreact.slice(idx + 1)
        ]
    }

    if (parameters) {
        updateNewWorkoutCreate = [
            ...newWorkoutCreact.slice(0, idx),
            { ...newWorkoutCreact[idx], ...parameters },
            ...newWorkoutCreact.slice(idx + 1)
        ]
    }

    return {
        ...state.workoutCreate,
        newWorkoutCreact: updateNewWorkoutCreate
    }
}

const modification = (item, property, value) => {
    item.forEach(el => {
        const newExercise = el.exercise.map(el2 => {
            return {
                ...el2,
                [property]: value
            }
        })
        el.exercise = newExercise;
    })

    return item;
}

const updateWorkoutCreatePage = (state, action) => {

    if (state === undefined) {
        return {
            workoutCreateMuscleList: [],
            loading: true,
            error: null,
            workoutCreateExerciseList: [],
            newWorkoutCreact: [],
            ShowFormExerciseParameters: false,
            FormExerciseParametersId: null
        }
    }

    switch (action.type) {
        case 'FETCH_CREATE_WORKOUT_LIST_REQUEST':
            return {
                ...state.workoutCreate,
                workoutCreateMuscleList: [],
                loading: true,
                error: null,
                workoutCreateExerciseList: []
            };

        case 'FETCH_CREATE_WORKOUT_LIST_SUCCESS':
            return {
                ...state.workoutCreate,
                workoutCreateMuscleList: modification(action.payload, 'expand', false),
                loading: false,
                error: null,
                workoutCreateExerciseList: []
            };

        case 'FETCH_CREATE_WORKOUT_LIST_FAILURE':
            return {
                ...state.workoutCreate,
                workoutCreateMuscleList: [],
                loading: false,
                error: action.payload,
                workoutCreateExerciseList: []
            };

        case 'CLICK_MUSCLE_ITEM':
            return {
                ...state.workoutCreate,
                workoutCreateExerciseList: action.payload
            };

        case 'TOGGLE_EXERCISE_ITEM_CHECKBOX':
            return updateNewWorkout(state, action.payload);

        case 'TOGGLE_EXERCISE_ITEM':
            return state.workoutCreate

        case 'SHOW_FORM_EXERCISE_PARAMETERS':
            return {
                ...state.workoutCreate,
                ShowFormExerciseParameters: action.payload,
                FormExerciseParametersId: action.id
            }

        case 'SAVE_FORM_EXERCISE_PARAMETERS':
            return updateNewWorkout(state, action.payload, action.parameters);

        default:
            return state.workoutCreate
    }
}

export default updateWorkoutCreatePage;


// Для добавления expand
/* const updateWorkoutCreateExerciseList = (state, exerciseItemId) => {

    const { workoutCreate: { workoutCreateExerciseList } } = state;
    const idx = workoutCreateExerciseList.findIndex(item => item.id === exerciseItemId);
    const item = workoutCreateExerciseList[idx];
    const updateItem = {
        ...item,
        expand: !item.expand
    }

    const updateList = [
        ...workoutCreateExerciseList.slice(0, idx),
        updateItem,
        ...workoutCreateExerciseList.slice(idx + 1)
    ]

    return updateList;
} */