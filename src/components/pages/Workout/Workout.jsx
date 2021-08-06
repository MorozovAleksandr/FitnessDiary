import React, { Fragment } from 'react';
import EmptyPage from '../../EmptyPage/EmptyPage';
import './Workout.css'

const Workout = () => {

    return (
        <Fragment>
            <EmptyPage title="Дневник ваших тренировок" text="Вы ещё ни разу не создавали тренировку" link="/workoutcreate" />
        </Fragment>
    )
}

export default Workout;