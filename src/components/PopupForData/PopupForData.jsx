import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonSave from '../ButtonSave/ButtonSave';
import './PopupForData.css'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import PopupForDataHeader from './PopupForDataHeader/PopupForDataHeader';
import PopupForDataItem from './PopupForDataItem/PopupForDataItem';
import { showFormExerciseParametersAC, saveFormExerciseParametersAC } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PopupForData = ({ showFormExerciseParametersAC, saveFormExerciseParametersAC, id }) => {

    const [open, setOpen] = useState(true);
    const [approaches, setApproaches] = useState('');
    const [repeat, setRepeat] = useState('');
    const [weight, setWeight] = useState('');

    const onClose = () => {
        setOpen(false);
        showFormExerciseParametersAC(false, null);
    }

    const onSave = () => {
        saveFormExerciseParametersAC(id, { approaches, repeat, weight });
        onClose();
    }


    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={onClose}
        >
            <div className="PopupForData">
                <PopupForDataHeader onClose={onClose} />
                <div className="PopupForData__body">
                    <div className="PopupForData__body__title">Заполните данные для записи</div>
                    <div className="PopupForData__body__data">
                        <div className="PopupForData__body__data__item">
                            <PopupForDataItem url="images/approaches.png" text="Подходы" value={approaches} setMethod={setApproaches} />
                        </div>

                        <div className="PopupForData__body__data__item">
                            <PopupForDataItem url="images/repeat.png" text="Повторения" value={repeat} setMethod={setRepeat} />
                        </div>

                        <div className="PopupForData__body__data__item">
                            <PopupForDataItem url="images/weight.png" text="Вес (кг)" value={weight} setMethod={setWeight} />
                        </div>

                    </div>
                    <ButtonSave text="Сохранить" event={onSave} />
                </div>


            </div>

        </Dialog>
    )
}

PopupForData.propTypes = {
    showFormExerciseParametersAC: PropTypes.func.isRequired,
    saveFormExerciseParametersAC: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}

const mapDispatchToProps = {
    showFormExerciseParametersAC,
    saveFormExerciseParametersAC
}

export default connect(null, mapDispatchToProps)(PopupForData);