import React from 'react';
import PropTypes from 'prop-types';

import WorkoutCreateExerciseListItem from './WorkoutCreateExerciseListItem/WorkoutCreateExerciseListItem';
import './WorkoutCreateExerciseList.css';
import { connect } from 'react-redux';

const WorkoutCreateExerciseList = ({ workoutCreateExerciseList }) => {
    let renderExerciseList = null;
    if (workoutCreateExerciseList.length) {
        renderExerciseList = workoutCreateExerciseList.map(item => {
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

WorkoutCreateExerciseList.propTypes = {
    workoutCreateExerciseList: PropTypes.arrayOf(PropTypes.shape({
        details: PropTypes.string,
        id: PropTypes.id,
        title: PropTypes.string
    }))
}


const mapStateToProps = ({ workoutCreate: { workoutCreateExerciseList } }) => {
    return {
        workoutCreateExerciseList
    }
}

export default connect(mapStateToProps)(WorkoutCreateExerciseList);