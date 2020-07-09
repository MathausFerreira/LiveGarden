import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

const LiveGardenApp = props => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default LiveGardenApp;

// const store = createStore(rootReducer, composeEnhancers({
//     sendTo: 'http://localhost:8000',
//     actionsBlacklist: 'SOME_ACTION'
//     // or actionsBlacklist: ['SOME_ACTION', 'SOME_OTHER_ACTION']
//     // or just actionsBlacklist: 'SOME_' to omit both
//   }))