// import seriesMock from '../../Series.json'
import { SET_PLANTS, SET_EACH_PLANT } from '../actions';

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {

        switch (action.type) {
                case SET_PLANTS:
                        return action.plants;

                case SET_EACH_PLANT:
                        return action.plant;
                default:
                        return state;
        }
}