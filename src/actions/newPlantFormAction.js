import firebase from 'firebase';

export const SET_WHOLE_PLANT = 'SET_WHOLE_PLANT';
export const setWholePlant = plant => ({
    type: SET_WHOLE_PLANT,
    plant,
});

//action 
export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
};

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM
});

export const PLANT_SAVED_SUCCESS = 'PLANT_SAVED_SUCCESS';
const plantSavedSuccess = () => ({
    type: PLANT_SAVED_SUCCESS
});

export const UPDATE_PLANT_ONOFF = 'UPDATE_PLANT_ONOFF';
export const updatePlantONOFF = plant => ({
    type: UPDATE_PLANT_ONOFF,
    plant,
});

export const saveNewPlant = plant => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        if (plant.id) {
            await firebase.database().ref(`users/${currentUser.uid}/Plant/${plant.id}`).set(plant);
        } else {
            await firebase.database().ref(`users/${currentUser.uid}/Plant`).push(plant);
        }
        dispatch(plantSavedSuccess())
    }
}
export const updatePlant = plant => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        if (plant.id) {
            if (plant.ONOFF == true) {
                await firebase.database().ref(`users/${currentUser.uid}/Plant/${plant.id}`).update({ ONOFF: false });
            } else {
                await firebase.database().ref(`users/${currentUser.uid}/Plant/${plant.id}`).update({ ONOFF: true });
            }
        }
        dispatch(updatePlantONOFF(plant))
    }
}