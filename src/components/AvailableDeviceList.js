import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import AvailableDevice from '../components/AvailableDevice';

const AvailableDeviceList = props => {
    const { Item, onPressItem } = props;

    const items = Item.map(eachItem => {
        //  console.log("deviceliste")
        //  console.log(eachItem)
        return (<AvailableDevice key={eachItem.id} eachItem={eachItem} navigateToDetail={(onPressItem)} />)
    });

    return (
        <ScrollView style={styles.container}>
            {items}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },
    
})

export default AvailableDeviceList;