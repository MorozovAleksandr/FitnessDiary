import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchWorkoutCreatePage } from '../../../actions/actions';
import withFitnessDiaryService from '../../hoc/withFitnessDiaryService';
import PageTitle from '../../PageTitle/PageTitle';
import './WorkoutCreate.css';
import WorkoutCreateExerciseList from './WorkoutCreateExerciseList/WorkoutCreateExerciseList';
import WorkoutCreateMuscleList from './WorkoutCreateMuscleList/WorkoutCreateMuscleList';


class WorkoutCreate extends React.Component {

    componentDidMount() {
        const { fetchWorkoutCreatePage } = this.props;
        fetchWorkoutCreatePage();
    }

    render() {
        return (
            <Fragment>
                <PageTitle title="Выберите упражнения для создания тренировки" />
                <div className="WorkoutCreate">
                    <WorkoutCreateMuscleList />
                    <WorkoutCreateExerciseList />
                </div>
            </Fragment>
        );
    }
};


const mapDispatchToProps = (dispatch, ownProps) => {
    const { fitnessDiaryService } = ownProps;

    return {
        fetchWorkoutCreatePage: fetchWorkoutCreatePage(fitnessDiaryService, dispatch)
    }
}

export default withFitnessDiaryService()(connect(null, mapDispatchToProps)(WorkoutCreate));