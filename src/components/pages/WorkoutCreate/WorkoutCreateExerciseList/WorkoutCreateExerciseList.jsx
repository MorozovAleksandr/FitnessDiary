import React from 'react';

import WorkoutCreateExerciseListItem from './WorkoutCreateExerciseListItem/WorkoutCreateExerciseListItem';
import './WorkoutCreateExerciseList.css';

const WorkoutCreateExerciseList = () => {
    return (
        <div className="WorkoutCreateExerciseList">
            <WorkoutCreateExerciseListItem />
        </div>
    );
};

export default WorkoutCreateExerciseList;