import firebase from 'firebase';

export const SET_PLANTS = 'SET_PLANTS'

const setPlants = plants => ({
    type: SET_PLANTS,
    plants,
})


export const watchPlants = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
        firebase
            .database()
            .ref(`users/${currentUser.uid}/Plant`)
            .on('value', snapshot => {
                const plants = snapshot.val();
                const action = setPlants(plants);
                dispatch(action);
            });

    }

}