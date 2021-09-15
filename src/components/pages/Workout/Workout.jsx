import React, { Fragment } from 'react';
import EmptyPage from '../../EmptyPage/EmptyPage';
import PageTitle from '../../PageTitle/PageTitle';
import './Workout.css'
import WorkoutItems from './WorkoutItems/WorkoutItems';

const Workout = () => {

    return (
        <Fragment>
            {/* <EmptyPage title="Дневник ваших тренировок" text="Вы ещё ни разу не создавали тренировку" link="/workoutcreate" /> */}
            <PageTitle title="Дневник ваших тренировок" />
            <WorkoutItems />
        </Fragment>
    )
}

export default Workout;