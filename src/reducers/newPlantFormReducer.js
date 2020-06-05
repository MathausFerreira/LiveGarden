import { SET_FIELD, PLANT_SAVED_SUCCESS, SET_WHOLE_PLANT, RESET_FORM } from '../actions';

const INITIAL_STATE = {
    id:null,
    Name: '',
    Age: '',
    Species: '',
    Avatar: '',
    AvatarGender: 'Masculino',
    Iteration: false,
    IterationFrequency: 0,
    AutoRotate: true,
    TimeToRotate: '',
    Notes: '',
}


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_FIELD:
            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;

        case SET_WHOLE_PLANT:
            return action.plant;

        case RESET_FORM:
        case PLANT_SAVED_SUCCESS:
            return INITIAL_STATE;


        default:
            return state;
    }

}