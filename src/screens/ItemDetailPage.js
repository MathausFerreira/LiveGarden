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
            <ScrollView style={styles.containerAll}>
                <Text style={styles.textStyle}> {eachItem.Name} </Text>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.numberColumn}> 56 </Text>
                    <Text style={styles.numberColumn}> 70 </Text>
                    <Text style={styles.numberColumn}> 36 </Text>
                    <Text style={styles.numberColumn}> 36 </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Image style={styles.termoImage} source={require('../images/termo.png')} />
                    <Text style={[styles.numberColumn, { textAlign: 'left' }]}> {Temp}°C </Text>
                </View>
                <View style={[styles.containerHumidity]}>
                    <ImageBackground style={styles.humidityBox} source={require('../images/humidity.png')}>
                        <Text style={[styles.numberColumn, styles.textCenteredHumidity]}> {HumidityLevel}% </Text>
                    </ImageBackground>
                    <View style={[styles.humidityBox]} >
                        <View style={styles.switchbox}>
                            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue} />
                        </View>
                        <Text style={[styles.switchTextStyle]}>{this.state.switchValue ? 'Connected' : 'Unconnected'}</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }

}
const styles = StyleSheet.create({
    containerAll: {
        backgroundColor: '#e2f9ff',
    },
    containerLineNumbers: {
        height: 120,
        // padding: 10,
        flexDirection: 'row',
        // borderColor: 'yellow',
        // borderWidth: 2,
    },
    textStyle: {
        fontSize: 30,
        color: 'red',
        padding: 10,
        // borderColor: 'red',
        // borderWidth: 2,
    },
    numberColumn: {
        flex: 1,
        textAlign: 'center',
        fontSize: 60,
        color: '#151',
        // borderColor: 'green',
        // borderWidth: 2,
    },
    termoImage: {
        aspectRatio: 1,
        width: 115,
        // borderColor: 'red',
        // borderWidth: 2,
    },
    containerHumidity: {
        flex: 1,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // borderColor: 'black',
        // borderWidth: 2,
    },
    textCenteredHumidity: {
        position: 'absolute',
        top: 95,
        left: 0,
        right: 60,
        bottom: 50,
        fontSize: 40,
    },
    humidityBox: {
        aspectRatio: 1,
        width: 200,
        // borderColor: 'red',
        // borderWidth: 2,
    },
    switchbox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // borderColor: 'green',
        // borderWidth: 2,
    },
    switchTextStyle: {
        flex:2,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
        // borderColor: 'green',
        // borderWidth: 2,
    },


})