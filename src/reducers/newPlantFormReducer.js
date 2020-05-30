import { SET_FIELD } from '../actions';

const INITIAL_STATE = {
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
            const newState = {...state};
            newState[action.field] = action.value;
            return newState;

        // case CLEAR_NEWPLANT_STATE:
        //     return INITIAL_STATE;

        default:
            return state;
    }

}