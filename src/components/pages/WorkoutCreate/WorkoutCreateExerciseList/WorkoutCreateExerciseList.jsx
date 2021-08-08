import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WorkoutCreateExerciseListItem from './WorkoutCreateExerciseListItem/WorkoutCreateExerciseListItem';
import './WorkoutCreateExerciseList.css';

const WorkoutCreateExerciseList = ({ workoutCreateExerciseList, newWorkoutCreact }) => {
    let renderExerciseList = null;
    if (workoutCreateExerciseList.length) {
        renderExerciseList = workoutCreateExerciseList.map(item => {
            const checked = newWorkoutCreact.find(item2 => item2.id === item.id) ? true : false;
            return <WorkoutCreateExerciseListItem expand={item.expand} key={item.id} checked={checked} id={item.id} title={item.title} details={item.details} />
        })
    }

    if (renderExerciseList === null) {
        return null
    }

    return (
        <div className="WorkoutCreateExerciseList">
            {renderExerciseList}
        </div>
    );
};

WorkoutCreateExerciseList.propTypes = {
    workoutCreateExerciseList: PropTypes.arrayOf(PropTypes.shape({
        details: PropTypes.string,
        id: PropTypes.id,
        title: PropTypes.string
    })),
    newWorkoutCreact: PropTypes.arrayOf(PropTypes.any).isRequired
}


const mapStateToProps = ({ workoutCreate: { workoutCreateExerciseList, newWorkoutCreact } }) => {
    return {
        workoutCreateExerciseList,
        newWorkoutCreact
    }
}

export default connect(mapStateToProps)(WorkoutCreateExerciseList);