import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './WorkoutCreateExerciseListItem.css'

const WorkoutCreateExerciseListItem = () => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        event.stopPropagation();
        console.log(checked);
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
                <Typography className="WorkoutCreateExerciseListItem__name">Шраги стоя с гантелями</Typography>
            </AccordionSummary>

            <AccordionDetails className="WorkoutCreateExerciseListItem__details">
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default WorkoutCreateExerciseListItem;