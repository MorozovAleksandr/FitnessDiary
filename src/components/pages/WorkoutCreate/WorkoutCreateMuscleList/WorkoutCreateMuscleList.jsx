import React from 'react';
import './WorkoutCreateMuscleList.css';
import WorkoutCreateMuscleListItem from './WorkoutCreateMuscleListItem/WorkoutCreateMuscleListItem';

const WorkoutCreateMuscleList = () => {
    return (
        <div className="WorkoutCreateMuscleList">
            <WorkoutCreateMuscleListItem icon="images/breast.png" title="Мышцы грудного отдела" />
        </div>
    );
};

export default WorkoutCreateMuscleList;