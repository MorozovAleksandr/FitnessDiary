import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWorkoutCreatePage } from '../../../redux/actions/actions';
import withFitnessDiaryService from '../../hoc/withFitnessDiaryService';
import PageTitle from '../../PageTitle/PageTitle';
import './WorkoutCreate.css';
import WorkoutCreateExerciseList from './WorkoutCreateExerciseList/WorkoutCreateExerciseList';
import WorkoutCreateMuscleList from './WorkoutCreateMuscleList/WorkoutCreateMuscleList';


class WorkoutCreate extends React.Component {

    static propTypes = {
        fetchWorkoutCreatePage: PropTypes.func.isRequired
    }

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