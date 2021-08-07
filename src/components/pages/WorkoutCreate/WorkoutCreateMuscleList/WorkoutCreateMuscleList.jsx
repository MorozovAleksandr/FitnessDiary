import React from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../../../ErrorIndicator/ErrorIndicator';
import Spinner from '../../../Spinner/Spinner';
import './WorkoutCreateMuscleList.css';
import WorkoutCreateMuscleListItem from './WorkoutCreateMuscleListItem/WorkoutCreateMuscleListItem';
import { onClickWorkoutListItem } from '../../../../actions/actions';


const WorkoutCreateMuscleList = ({ workoutCreateMuscleList, loading, error, onClickWorkoutListItem }) => {

    const renderListItem = workoutCreateMuscleList.map(item => {
        return <WorkoutCreateMuscleListItem id={item.id} onClickWorkoutListItem={onClickWorkoutListItem} key={item.id} icon={item.imgUrl} title={item.title} />
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

const mapStateToProps = ({ workoutCreate: { workoutCreateMuscleList, loading, error } }) => {
    return {
        workoutCreateMuscleList,
        loading,
        error
    }
}

const mapDispatchToProps = {
    onClickWorkoutListItem
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreateMuscleList);