import React from 'react';
import { Route, Switch } from 'react-router';

import Diet from '../pages/Diet/Diet';
import Directory from '../pages/Directory/Directory';
import Meterage from '../pages/Meterage/Meterage';
import Workout from '../pages/Workout/Workout';
import WorkoutCreate from '../pages/WorkoutCreate/WorkoutCreate';
import './Content.css'

const Content = () => {
    return (
        <div className="Content">
            <Switch>
                <Route path='/' exact component={Workout} />
                <Route path='/workoutcreate' component={WorkoutCreate} />
                <Route path='/diet' component={Diet} />
                <Route path='/meterage' component={Meterage} />
                <Route path='/directory' component={Directory} />
            </Switch>
        </div>
    )
}

export default Content;