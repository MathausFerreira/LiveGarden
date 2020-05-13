import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import AvailableDevice from '../components/AvailableDevice';

import AvailableDeviceList from '../components/AvailableDeviceList';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

let maker = [];

maker.push({
    Name: 'Joao',
    key: '21',
    itemID: 1221,
},
    {
        Name: 'Maria',
        key: '22',
        itemID: 1220,

    })

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this.setState({
            items: maker
        });
    }

    render() {
        return (
            <View>
                <View>
                    <AvailableDeviceList Item={this.state.items} onPressItem={pageParams => {
                        this.props.navigation.navigate('ItemDetailPage', pageParams);
                    }} />
                </View>
                    <ActionButton buttonColor="rgba(21,76,60,1)" onPress={() => console.log('clicou')} />
            </View>
        )
    };
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
