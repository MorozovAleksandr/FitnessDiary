import React, { Fragment } from 'react';
import PageTitle from '../../PageTitle/PageTitle';
import EmptyPage from '../../EmptyPage/EmptyPage';

const Diet = () => {
    return (
        <Fragment>
            <PageTitle title="Дневник вашей диеты" />
            <EmptyPage text="Тут пусто:)" />
        </Fragment>
    )
}

export default Diet;