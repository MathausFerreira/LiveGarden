// import seriesMock from '../../Series.json'
import { SET_PLANTS } from '../actions';

// trata cada campo do formulario e n~çao meu objeto da store
const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {

        switch (action.type) {
                case SET_PLANTS:
                        return action.plants;

                default:
                        return state;
        }
}