import React from 'react';

import { View, Text, Image, StyleSheet, ImageBackground, Switch, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import { deletePlant, updatePlantActuator, watchEachPlant } from '../actions';

class ItemDetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount() {
        const { navigation, watchEachPlant, setWholePlant } = this.props;
        const { eachItem } = navigation.state.params;
        //   console.log('------------- eachItem ---------------')
        //   console.log(eachItem);
        //   console.log('------------- eachItem ---------------')
        // setWholePlant(eachItem);
        watchEachPlant(eachItem);
    }


    render() {
        const { newPlant, navigation, updatePlantActuator } = this.props;
        console.log('-------------newPlant---------------')
        console.log(newPlant)
        console.log('-------------newPlant---------------')
        return (
            <ScrollView style={[styles.containerAll, styles.border]}>
                <Text style={[styles.NameStyle, styles.border2]}> {newPlant.Name} </Text>
                <View style={[styles.containerLineNumbers, styles.border2]}>
                    <Image style={[styles.termoImage, styles.border]} source={require('../images/termo.png')} />
                    <View style={[{ flexDirection: 'column' }, { flex: 2 }]}>
                        <Text style={[styles.textStyle, { textAlign: 'left' }, styles.border]}> Temperatura</Text>
                        <Text style={[styles.numberColumn, { textAlign: 'left' }, styles.border]}> {newPlant.Sensors.Temperature ? newPlant.Sensors.Temperature : 0}°C </Text>
                    </View>
                </View>

                <View style={[styles.containerHumidity, styles.border2]}>
                    <ImageBackground style={[styles.humidityBox, styles.border]} source={require('../images/humidity.png')}>
                        <Text style={[styles.numberColumn, styles.textCenteredHumidity, styles.border]}> {newPlant.Sensors.Humidity}% </Text>
                    </ImageBackground>

                    <View style={[styles.border, { flex: 1 }]}>

                        <View style={[styles.border, styles.LineActuator]}>
                            <Text style={[styles.textStyle, styles.Actuator]}> Luz</Text>
                            {this.state.isLoading ?
                                <ActivityIndicator />
                                : <View style={[styles.border, styles.LineActuator]}>
                                    <Switch style={styles.switchbox}
                                        value={newPlant.Actuators.Light}
                                        onValueChange={value => { updatePlantActuator(newPlant, 'Light', value) }} />
                                </View>
                            }
                        </View>

                        <View style={[styles.border, styles.LineActuator]}>
                            <Text style={[styles.textStyle, styles.Actuator]}> Motor</Text>
                            {this.state.isLoading ?
                                <ActivityIndicator />
                                : <View style={[styles.border, styles.LineActuator]}>
                                    <Switch style={styles.switchbox}
                                        value={newPlant.Actuators.Motor}
                                        onValueChange={value => { updatePlantActuator(newPlant, 'Motor', value) }} />
                                </View>
                            }
                        </View>
                        <View style={[styles.border, styles.LineActuator]}>
                            <Text style={[styles.textStyle, styles.Actuator]}> Bomba</Text>
                            {this.state.isLoading ?
                                <ActivityIndicator />
                                : <View style={[styles.border, styles.LineActuator]}>
                                    <Switch style={styles.switchbox}
                                        value={newPlant.Actuators.Pump}
                                        onValueChange={value => { updatePlantActuator(newPlant, 'Pump', value) }} />
                                </View>
                            }
                        </View>
                    </View>
                </View>
                <View style={[styles.containerLineNumbers, styles.border2]}>
                    <Text style={[styles.textStyle, { textAlign: 'center' }, styles.border]}> Luminosidade :  {newPlant.Sensors.Luminosity} % </Text>
                    <Image style={[styles.termoImage, styles.border]} source={require('../images/brightness.png')} />
                </View>
                <View style={styles.button}>
                    <Button title="Editar" onPress={() => {
                        navigation.replace('NewPlantPage', { plantToEdit: newPlant })
                    }} />
                </View>
                <View style={styles.button}>
                    <Button title="Deletar" color="#ff0000" onPress={async () => {
                        await this.props.deletePlant(newPlant);
                        navigation.goBack();

                    }} />
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    border: {
        // borderColor: 'black',
        // borderWidth: 2,
    },
    border2: {
        borderColor: '#71bab1',
        borderWidth: 1,
    },
    button: {
        padding: 10,
    },
    containerAll: {
        backgroundColor: '#e2fffb',
    },
    containerLineNumbers: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    NameStyle: {
        fontSize: 30,
        textAlign: 'left',
        color: '#2200f4',
        padding: 10,
    },
    LineActuator: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    Actuator: {
        textAlign: 'left',
        alignItems: 'center',
        flex: 2
    },
    textStyle: {
        justifyContent: "center",
        flex: 1,
        fontSize: 25,
        color: '#c600ff',
    },
    numberColumn: {
        flex: 1,
        textAlign: 'center',
        fontSize: 50,
        color: '#151',
    },
    termoImage: {
        aspectRatio: 1,
        width: 115,
        resizeMode: 'center'
    },
    containerHumidity: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textCenteredHumidity: {
        position: 'absolute',
        top: 85,
        left: 0,
        right: 60,
        bottom: 50,
        fontSize: 40,
    },
    humidityBox: {
        aspectRatio: 1,
        width: 190,
    },
    switchbox: {
        // flex: 2,
        // alignItems: 'flex-start',
        // borderColor: 'red',
        // borderWidth: 2,
        // justifyContent: "center",
    },
})


function mapStateToProps(state) {
    return {
        newPlant: state.newPlant//plantWithKey//
    }
}

const mapDispatchToProps = {
    deletePlant,
    watchEachPlant,
    updatePlantActuator,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailPage)
{/* <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>Idade : </Text> 
                    <Text style={styles.textStyle}> {eachItem.Age} </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>AutoRotate : </Text> 
                    <Text style={styles.textStyle}> {eachItem.AutoRotate} </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>Avatar : </Text> 
                    <Text style={styles.textStyle}> {eachItem.Avatar} </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>Genero : </Text> 
                    <Text style={styles.textStyle}> {eachItem.AvatarGender} </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>Interagir ?  </Text> 
                    <Text style={styles.textStyle}> {eachItem.Iterarion} </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>Frequência : </Text> 
                    <Text style={styles.textStyle}> {eachItem.IterationFrequency} </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>Espécie : </Text> 
                    <Text style={styles.textStyle}> {eachItem.Species} </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>Notes : </Text> 
                    <Text style={styles.textStyle}> {eachItem.Notes} </Text>
                </View>
                <View style={styles.containerLineNumbers}>
                    <Text style={styles.textTitleStyle}>Tempo para Rodar : </Text> 
                    <Text style={styles.textStyle}> {eachItem.TimeToRotate} </Text>
                </View> */}