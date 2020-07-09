import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import AvailableDeviceList from '../components/AvailableDeviceList';
import ActionButton from 'react-native-action-button';

import { connect } from 'react-redux';
import { watchPlants } from '../actions';

class Home extends React.Component {
    componentDidMount() {
        this.props.watchPlants();
    }

    render() {
        const { plantList, navigation } = this.props;
        if(plantList===null){
            return <ActivityIndicator/>;
        }
        return (
            <View>
                <View>
                    <AvailableDeviceList Item={plantList} onPressItem={pageParams => {
                        navigation.navigate('ItemDetailPage', pageParams);
                    }} />
                </View>
                <ActionButton buttonColor="rgba(21,76,60,1)" onPress={() => { navigation.navigate('NewPlantPage') }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionButtonIcon: {
        padding: 10,
        fontSize: 20,
        height: 22,
        color: 'white',
        borderColor: 'black',
        borderWidth: 10,
    },
});

const mapStateToProps = state => {
    const { plantList } = state;
    if (plantList === null) {
        return { plantList }
    }

    const keys = Object.keys(plantList);
    const plantsWithKeys = keys.map(id => {return { ...plantList[id], id } })
    return { plantList: plantsWithKeys };
}

export default connect(mapStateToProps, { watchPlants })(Home);
