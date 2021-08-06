import React from 'react';
import './WorkoutCreateMuscleListItem.css';

const WorkoutCreateMuscleListItem = ({ icon, title }) => {
    return (
        <div className="WorkoutCreateMuscleListItem">
            <img src={icon} alt="breast" />
            <span className="WorkoutCreateMuscleListItem__title">{title}</span>
        </div>
    );
};

export default WorkoutCreateMuscleListItem;