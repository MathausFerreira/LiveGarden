import {combineReducers} from 'redux';

import  userReducer  from './userReducer';
import  newPlantFormReducer  from './newPlantFormReducer';

export default combineReducers({
    user: userReducer,
    newPlant: newPlantFormReducer,
    
});