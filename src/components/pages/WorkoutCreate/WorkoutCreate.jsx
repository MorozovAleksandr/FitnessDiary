import React, { Fragment } from 'react';
import PageTitle from '../../PageTitle/PageTitle';
import './WorkoutCreate.css';
import WorkoutCreateExerciseList from './WorkoutCreateExerciseList/WorkoutCreateExerciseList';
import WorkoutCreateMuscleList from './WorkoutCreateMuscleList/WorkoutCreateMuscleList';


const WorkoutCreate = () => {
    return (
        <Fragment>
            <PageTitle title="Выберите упражнения для создания тренировки" />
            <div className="WorkoutCreate">
                <WorkoutCreateMuscleList />
                <WorkoutCreateExerciseList />
            </div>
        </Fragment>

    )
}

export default WorkoutCreate;