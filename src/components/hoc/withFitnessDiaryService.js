// HOC Для обёртки компонентов сервисом

import React from 'react';
import { FitnessDiaryServiceConsumer } from '../../services/FitnessDiaryServiceContext/FitnessDiaryServiceContext';

const withFitnessDiaryService = () => (Wrapped) => {
    return (props) => {
        return (
            <FitnessDiaryServiceConsumer>
                {
                    (fitnessDiaryService) => {
                        return (<Wrapped {...props} fitnessDiaryService={fitnessDiaryService} />)
                    }
                }
            </FitnessDiaryServiceConsumer>
        )
    }
};

export default withFitnessDiaryService;