import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';


import AvailableDevice from '../components/AvailableDevice';

const AvailableDeviceList = props => {
    const { Item, onPressItem } = props;

    const items = Item.map(eachItem => {
        return (<AvailableDevice key={eachItem.id} Name={eachItem.Name} eachItem={eachItem} navigateToDetail={(onPressItem)} />)
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