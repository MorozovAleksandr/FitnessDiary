import React, { Fragment } from 'react';
import PageTitle from '../../PageTitle/PageTitle';
import EmptyPage from '../../EmptyPage/EmptyPage';

const Workout = () => {
    return (
        <Fragment>
            <PageTitle title="Дневник ваших тренировок" />
            <EmptyPage text="Вы ещё ни разу не создавали тренировку" />
        </Fragment>
    )
}

export default Workout;