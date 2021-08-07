import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ErrorIndicator from '../../../ErrorIndicator/ErrorIndicator';
import Spinner from '../../../Spinner/Spinner';
import './WorkoutCreateMuscleList.css';
import WorkoutCreateMuscleListItem from './WorkoutCreateMuscleListItem/WorkoutCreateMuscleListItem';
import { onClickWorkoutListItemAC } from '../../../../redux/actions/actions';


const WorkoutCreateMuscleList = ({ workoutCreateMuscleList, loading, error, onClickWorkoutListItemAC }) => {
    const renderListItem = workoutCreateMuscleList.map(item => {
        return <WorkoutCreateMuscleListItem item={item} onClickWorkoutListItemAC={onClickWorkoutListItemAC} key={item.id} />
    })

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return (
        <div className="WorkoutCreateMuscleList">
            {renderListItem}
        </div>
    )
};

WorkoutCreateMuscleList.propTypes = {
    workoutCreateMuscleList: PropTypes.any.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    onClickWorkoutListItemAC: PropTypes.func.isRequired
}

const mapStateToProps = ({ workoutCreate: { workoutCreateMuscleList, loading, error } }) => {
    return {
        workoutCreateMuscleList,
        loading,
        error
    }
}

const mapDispatchToProps = {
    onClickWorkoutListItemAC
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreateMuscleList);