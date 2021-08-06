import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import FitnessDiaryService from './services/fitnessdiary-services';
import { FitnessDiaryServiceProvider } from './components/FitnessDiaryServiceContext/FitnessDiaryServiceContext';
import store from './store';

const fitnessDiaryService = new FitnessDiaryService();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundry>
                <FitnessDiaryServiceProvider value={fitnessDiaryService}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </FitnessDiaryServiceProvider>
            </ErrorBoundry>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);