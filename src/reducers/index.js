import {combineReducers} from 'redux';

import  userReducer  from './userReducer';
import  newPlantFormReducer  from './newPlantFormReducer';
import  plantListReducer  from './plantListReducer';

export default combineReducers({
    user: userReducer,
    newPlant: newPlantFormReducer,
    plantList: plantListReducer,
    
});