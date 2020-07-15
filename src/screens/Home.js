import React from 'react';
import { StyleSheet, View, ActivityIndicator,Button } from 'react-native';

import AvailableDeviceList from '../components/AvailableDeviceList';

import { connect } from 'react-redux';
import { watchPlants, setWholePlant } from '../actions';

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
                <Button title="Nova Planta" color="#5A9" onPress={() => { navigation.navigate('NewPlantPage') }} />
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
    console.log(plantsWithKeys)
    return { plantList: plantsWithKeys };
}

export default connect(mapStateToProps, { watchPlants, setWholePlant })(Home);
