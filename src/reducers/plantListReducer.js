// import seriesMock from '../../Series.json'
import { SET_PLANTS } from '../actions';

const INITIAL_STATE = null;

export default function userReducer(state = INITIAL_STATE, action) {

        switch (action.type) {
                case SET_PLANTS:
                        return action.plants;
                default:
                        return state;
        }
}