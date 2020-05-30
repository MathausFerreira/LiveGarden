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


export const saveNewPlant = plant => {
    const {currentUser} = firebase.auth();
    firebase
    .database()
    .ref(`users/${currentUser.uid}/Plant`)
    .push(plant)
    .then(()=>{
        console.log('ta no firebase');
    })
    .catch()

    console.log("Estou aqui again", plant);

}