import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './WorkoutCreateExerciseListItem.css'

const WorkoutCreateExerciseListItem = ({ title, details }) => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        event.stopPropagation();
        setChecked(event.target.checked);
    };

    return (
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
    );
};

export default WorkoutCreateExerciseListItem;