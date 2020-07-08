import firebase from 'firebase';
import { Alert } from 'react-native';

export const SET_PLANTS = 'SET_PLANTS'
const setPlants = plants => ({
    type: SET_PLANTS,
    plants,
})

export const SET_EACH_PLANT = 'SET_EACH_PLANT'
const setEachPlant = plant => ({
    type: SET_EACH_PLANT,
    plant,
})

export const watchPlants = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/Plant`)
            .on('value', snapshot => {
                const plants = snapshot.val();
                const action = setPlants(plants);
                dispatch(action);
            });
    }
}

export const watchEachPlants = plant => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/Plant/${plant.id}`)
            .once('value', snapshot => {
                const plant2 = snapshot.val();
                const action = setEachPlant(plant2);
                dispatch(action);
            });
    }
}

// export const updateONOFF1 = plant=>{
//     const { currentUser } = firebase.auth();
//     return dispatch => {
//         firebase
//             .database()
//             .ref(`/users/${currentUser.uid}/Plant/${plant.id}`)
//             .update({
//                 ONOFF: 1,
//             });
//     }
// }

// export const updateONOFF0 = plant=>{
//     const { currentUser } = firebase.auth();
//     return dispatch => {
//         firebase
//             .database()
//             .ref(`/users/${currentUser.uid}/Plant/${plant.id}`)
//             .update({
//                 ONOFF: 0,
//             });
//     }
// }

export const deletePlant = plant => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            Alert.alert('Deletar', `Deseja realmente deletar  ${plant.Name}`, [
                {
                    text: 'Não',
                    onPress: () => { 
                        resolve(false);
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
                            .remove();
    
                            resolve(true);
                        } catch(e) {
                            reject(e);
                        }
                    },
                }
            ], { cancelable: false }
            )
        })

    }
}