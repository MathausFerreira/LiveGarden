import { SET_FIELD, PLANT_SAVED_SUCCESS, SET_WHOLE_PLANT, RESET_FORM,  PLANT_UPDATE_SUCCESS } from '../actions';

const INITIAL_STATE = {
    id: null,
    Name: '',
    Species: '',
    Avatar: '',
    AvatarGender: "Masculino",
    Iteration: false,
    IterationFrequency: 0,
    AutoRotate: true,
    Notes: '',
    Actuators: {
        Light: false,
        Motor: false,
        Pump: false,
    },
    Sensors: {
        Humidity: 0,
        Temperature: 0,
        Luminosity: 0,
    }
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {


        case SET_FIELD:
            const newState = { ...state };
            newState[action.field] = action.value;
            return newState;
            
        case PLANT_UPDATE_SUCCESS:
        case SET_WHOLE_PLANT:
            return action.plant;

        case RESET_FORM:
        case PLANT_SAVED_SUCCESS:
            return INITIAL_STATE;

        default:
            return state;
    }

}