import React from 'react';

import WorkoutCreateExerciseListItem from './WorkoutCreateExerciseListItem/WorkoutCreateExerciseListItem';
import './WorkoutCreateExerciseList.css';
import { connect } from 'react-redux';

const WorkoutCreateExerciseList = ({ workoutCreateMuscleList, activeItem }) => {

    let renderExerciseList = null;
    if (activeItem !== null) {
        const ExerciseList = workoutCreateMuscleList.find((item) => item.id === activeItem);
        renderExerciseList = ExerciseList.exercise.map(item => {
            return <WorkoutCreateExerciseListItem key={item.id} title={item.title} details={item.details} />
        })
    }

    if (renderExerciseList === null) {
        return <div>Выберите группу мышц</div>
    }

    return (
        <div className="WorkoutCreateExerciseList">
            {renderExerciseList}
        </div>
    );
};

const mapStateToProps = ({ workoutCreate: { workoutCreateMuscleList }, workoutCreateMuscleList: { activeItem } }) => {
    return {
        workoutCreateMuscleList,
        activeItem
    }
}

export default connect(mapStateToProps)(WorkoutCreateExerciseList);