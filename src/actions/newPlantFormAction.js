import firebase from 'firebase';

import { Alert } from 'react-native';

export const SET_WHOLE_PLANT = 'SET_WHOLE_PLANT';
export const setWholePlant = plant => ({
    type: SET_WHOLE_PLANT,
    plant,
});
 
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
export const plantSavedSuccess = () => ({
    type: PLANT_SAVED_SUCCESS
});

export const PLANT_UPDATE_SUCCESS = 'PLANT_UPDATE_SUCCESS';
export const updateSuccess = () => ({
    type: PLANT_UPDATE_SUCCESS,
});

export const saveNewPlant = plant => {
    const { currentUser } = firebase.auth();
    // console.log("Deletando")
    // console.log(plant)
    return async dispatch => {
        if (plant.id) {
            await firebase.database().ref(`users/${currentUser.uid}/Plant/${plant.id}`).set(plant);
        } else {
            await firebase.database().ref(`users/${currentUser.uid}/Plant`).push(plant);
        }
        dispatch(plantSavedSuccess())
    }
}
export const updatePlantActuator = (plant, field, value) => {
    const { currentUser } = firebase.auth();
    return async dispatch => {
        if (plant.id) {
                await firebase.database().ref(`users/${currentUser.uid}/Plant/${plant.id}/Actuators`).update({ [field]: value });
        }
    }
}

export const watchEachPlant = (plant) => {
    const id = plant.id;
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/Plant/${plant.id}`)
            .on('value', snapshot => {
                const plant2 = snapshot.val();
                // let plant3 = {...plant2, ['id']: id }
                dispatch(setWholePlant(addID(plant2,id)));
            });
    }
}

function addID(plant, id){
    return  {...plant, ['id']: id }
}


export const deletePlant = (plant) => {
    return dispatch => {
        // return new Promise((resolve, reject) => {
            console.log("IDD")
            console.log(plant)
            Alert.alert('Deletar', `Deseja realmente deletar  ${plant.Name}`, [
                {
                    text: 'Não',
                    onPress: () => { 
                        // resolve(false);
                    },
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: async () => { 
                        const {currentUser} = firebase.auth();
                        try{
                            await firebase
                            .database()
                            .ref(`/users/${currentUser.uid}/Plant/${plant.id}`)
                            .remove()
                            resolve(true);
                        } catch(e) {
                            reject(e);
                        }
                    },
                }
            ], { cancelable: false }
            )
        // })
    }
}