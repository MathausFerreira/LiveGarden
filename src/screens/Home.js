import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import AvailableDevice from '../components/AvailableDevice';

import AvailableDeviceList from '../components/AvailableDeviceList';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import series from '../../Series.json';

let maker = [];

// maker = {series};

 maker.push(
    {
        "id": 2,
        "Name": "Ana",
        "itemID": 1221,
        "img":
            "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
    },
    {
        "id": 3,
        "Name": "Maria",
        "itemID": 1221,
        "img":
            "https://ia.media-imdb.com/images/M/MV5BMTkzNDA0MTg5Ml5BMl5BanBnXkFtZTgwNzM3NzMxODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        "id": 4,
        "Name": "Artur",
        "itemID": 1221,
        "img":
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMWViMmNmYzEtOTU4My00YjdiLWE5ZDUtOGE2NjMzYTE1MDg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,702,1000_AL_.jpg"
    } 
 );

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
