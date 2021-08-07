import React from 'react';
import PropTypes from 'prop-types';
import './WorkoutCreateMuscleListItem.css';

const WorkoutCreateMuscleListItem = ({ item: { imgUrl, title, exercise }, onClickWorkoutListItemAC }) => {
    return (
        <div onClick={() => { onClickWorkoutListItemAC(exercise) }} className="WorkoutCreateMuscleListItem">
            <img src={imgUrl} alt="breast" />
            <span className="WorkoutCreateMuscleListItem__title">{title}</span>
        </div>
    );
};

WorkoutCreateMuscleListItem.propTypes = {
    item: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        exercise: PropTypes.any.isRequired,
    }),
    onClickWorkoutListItemAC: PropTypes.func.isRequired
}

export default WorkoutCreateMuscleListItem;