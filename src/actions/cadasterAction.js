import firebase from 'firebase';
import { Alert } from 'react-native';

export const NEWPLANT = 'NEWPLANT';

export const newplat = (field, value) => {
    return {
        type: NEWPLANT,
        field,
        value
    }

};

export const savePlant = plant => {
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