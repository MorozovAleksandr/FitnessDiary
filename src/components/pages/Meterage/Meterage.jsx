import React, { Fragment } from 'react';
import PageTitle from '../../PageTitle/PageTitle';
import EmptyPage from '../../EmptyPage/EmptyPage';

const Meterage = () => {
    return (
        <Fragment>
            <PageTitle title="Дневник ваших замеров" />
            <EmptyPage text="Вы ещё ни разу не создавали замер" />
        </Fragment>
    )
}

export default Meterage;