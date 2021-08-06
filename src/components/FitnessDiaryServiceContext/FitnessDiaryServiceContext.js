// context API для сервиса

import React from 'react';
const {
    Provider: FitnessDiaryServiceProvider,
    Consumer: FitnessDiaryServiceConsumer
} = React.createContext();

export {
    FitnessDiaryServiceProvider,
    FitnessDiaryServiceConsumer
}