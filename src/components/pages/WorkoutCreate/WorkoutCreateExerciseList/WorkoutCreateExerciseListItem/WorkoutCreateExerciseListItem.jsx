import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { toggleExerciseItemCheckboxAC, showFormExerciseParametersAC } from '../../../../../redux/actions/actions';

import './WorkoutCreateExerciseListItem.css'
import PopupForData from '../../../../PopupForData/PopupForData';

const WorkoutCreateExerciseListItem = ({ title, details, id, toggleExerciseItemCheckboxAC, checked, ShowFormExerciseParameters, showFormExerciseParametersAC, FormExerciseParametersId }) => {

    const handleChange = (event) => {
        event.stopPropagation();
        toggleExerciseItemCheckboxAC(id);
        if (!checked) {
            showFormExerciseParametersAC(!checked, id);
        }

    };

    return (
        <Fragment>
            {
                (ShowFormExerciseParameters && (FormExerciseParametersId === id)) &&
                <PopupForData id={FormExerciseParametersId} />
            }
            <Accordion className="WorkoutCreateExerciseListItem__wrapperItem">
                <AccordionSummary
                    className="WorkoutCreateExerciseListItem"
                    expandIcon={<img src="images/arrow.png" alt="arrow" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={handleChange}
                        control={<Checkbox
                            color="primary"
                            checked={checked}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />}
                    />
                    <Typography className="WorkoutCreateExerciseListItem__name">{title}</Typography>
                </AccordionSummary>

                <AccordionDetails className="WorkoutCreateExerciseListItem__details">
                    <Typography>
                        {details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    );
};

WorkoutCreateExerciseListItem.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    toggleExerciseItemCheckboxAC: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    ShowFormExerciseParameters: PropTypes.bool.isRequired,
    showFormExerciseParametersAC: PropTypes.func.isRequired,
    FormExerciseParametersId: PropTypes.any
}

const mapStateToProps = ({ workoutCreate: { ShowFormExerciseParameters, FormExerciseParametersId } }) => {
    return {
        ShowFormExerciseParameters,
        FormExerciseParametersId
    }
}

const mapDispatchToProps = {
    toggleExerciseItemCheckboxAC,
    showFormExerciseParametersAC
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutCreateExerciseListItem);