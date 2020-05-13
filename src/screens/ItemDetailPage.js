import React from 'react';

import { View, Text, Image, StyleSheet, ImageBackground, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

let Temp = 20;
let HumidityLevel = 100;
export default class ItemDetailPage extends React.Component {
    //Initial state false for the switch. You can change it to true just to see.
    state = { switchValue: false }
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({ switchValue: value })
        //state changes according to switch
        //which will result in re-render the text
    }
    render() {
        const { eachItem } = this.props.navigation.state.params;
        return (
            <ScrollView style={styles.containerNome}>
                <Text style={styles.textStyle}> {eachItem.Name} </Text>
                <View style={styles.containerNumber}>
                    <Text style={styles.temperature}> 56 </Text>
                    <Text style={styles.temperature}> 70 </Text>
                    <Text style={styles.temperature}> 36 </Text>
                    <Text style={styles.temperature}> 36 </Text>
                </View>
                <View style={styles.containerNumber}>
                    <Image style={styles.weather} source={require('../images/termo.png')} />
                    <Text style={[styles.temperature, { textAlign: 'left' }]}> {Temp}°C </Text>
                </View>
                <View style={[styles.containerNumber, styles.containerHumidity]}>
                    <ImageBackground source={require('../images/humidity.png')} style={styles.weather2}>
                        <Text style={[styles.temperature, styles.textCentered]}> {HumidityLevel}% </Text>
                    </ImageBackground>

                    <Text style={styles.temperature} />

                    <View style={{borderColor:'red', borderWidth:5}}>
                        <Switch style={[styles.box, { transform: [{ scale: 2 }] }]} onValueChange={this.toggleSwitch} value={this.state.switchValue} />
                        <Text style={styles.textStyle}>{this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }

}
const styles = StyleSheet.create({
    textCentered: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: 90,
        paddingRight: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
    },
    box: {
        height: 25,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#61dafb",
        top: 100,
        left:100
    },
    switchStyle: {
        aspectRatio: 1,
        borderColor: 'red'

    },
    containerNome: {
        backgroundColor: '#e2f9ff',
    },
    containerNumber: {
        paddingTop: 10,
        flexDirection: 'row'
    },
    containerHumidity: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderColor: 'black',
        // borderWidth:2,

    },
    temperature: {
        flex: 1,
        textAlign: 'right',
        fontSize: 70,
        color: '#a53',
        borderColor: 'green',
        borderWidth: 2,
    },
    textStyle: {
        fontSize: 30,
        color: 'red',
    },
    weather: {
        aspectRatio: 1,
        width: 100,
    },
    weather2: {
        aspectRatio: 1,
        width: 200,
    }

})