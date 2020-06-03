import firebase from 'firebase';
export const SET_FIELD = 'SET_FIELD';

//action 

export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }

};

export const PLANT_SAVED_SUCCESS = 'PLANT_SAVED_SUCCESS';
const plantSavedSuccess = () =>({
    type: PLANT_SAVED_SUCCESS
});

export const saveNewPlant = plant => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
         await firebase
            .database()
            .ref(`users/${currentUser.uid}/Plant`)
            .push(plant);
        dispatch(plantSavedSuccess())
    }
}