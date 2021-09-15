import React from 'react';
import './WorkoutItem.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const WorkoutItem = () => {
    return (
        <div className="WorkoutItem">
            <Accordion>

                <AccordionSummary className="WorkoutItem__accordionTop"
                    expandIcon={<img src="images/arrow.png" alt="arrow" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="WorkoutItem__accordionTop_right">
                        <div>
                            date
                        </div>

                    </div>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Детали
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default WorkoutItem;