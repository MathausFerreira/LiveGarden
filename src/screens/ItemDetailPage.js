import React from 'react';

import { View, Text, Image, StyleSheet, ImageBackground, Switch, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import { deletePlant, updatePlant, watchEachPlant } from '../actions';

let Temp = 20;
let HumidityLevel = 100;
class ItemDetailPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            switchValue: false,
            isLoading: false,
        }
    }

    componentDidMount() {
        const { navigation, watchEachPlant } = this.props;
        const { eachItem } = navigation.state.params;

        watchEachPlant(eachItem);
        this.setState({ switchValue: eachItem.ONOFF }) ;
    }

    toggleSwitch = () => {
        this.props.updatePlant(this.props.newPlant)
        this.setState({ switchValue: this.props.newPlant.ONOFF })
    }

    render() {
        const { newPlant, navigation } = this.props;
        return (
            <ScrollView style={styles.containerAll}>
                <Text style={styles.NameStyle}> {newPlant.Name} </Text>
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
                        {
                                this.state.isLoading ?
                                 <ActivityIndicator />
                                    : <Switch value={newPlant.ONOFF} onValueChange={this.toggleSwitch} />
                            }
                            {/* <Button title="ON/OFF"  color="#ffaaf0" onPress={console.log("CERTOOO")} />
                            <Switch onValueChange={this.toggleSwitch} value={this.state.switchValue}  /> */}
                        </View>
                        {/* <Text style={[styles.switchTextStyle]}>{this.state.switchValue ? 'Connected' : 'Unconnected'}</Text> */}
                    </View>
                </View>
                <View style={styles.button}>
                    <Button title="Editar"  onPress={() => {
                            navigation.replace('NewPlantPage', { plantToEdit: newPlant })
                        }}/>
                </View>
                <View style={styles.button}>
                    <Button title="Deletar" color="#ff0000" onPress={async () => {
                            const hasDeleted = await this.props.deletePlant(newPlant);

                            if (hasDeleted) {
                                navigation.goBack();
                            }
                        }} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
    },
    containerAll: {
        backgroundColor: '#e2f9ff',
    },
    containerLineNumbers: {
        // height: 120,
        // padding: 10,
        flexDirection: 'row',
        borderColor: 'yellow',
        borderWidth: 2,
    },
    NameStyle: {
        fontSize: 30,
        color: 'red',
        padding: 10,
        borderColor: 'red',
        borderWidth: 2,
    },
    numberColumn: {
        flex: 1,
        textAlign: 'center',
        fontSize: 60,
        color: '#151',
        borderColor: 'green',
        borderWidth: 2,
    },
    termoImage: {
        aspectRatio: 1,
        width: 115,
        borderColor: 'red',
        borderWidth: 2,
    },
    containerHumidity: {
        flex: 1,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderColor: 'black',
        borderWidth: 2,
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
        borderColor: 'red',
        borderWidth: 2,
    },
    switchbox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'black',
        borderWidth: 2,
    },
    switchTextStyle: {
        flex: 2,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
        borderColor: 'red',
        borderWidth: 2,
    },
    textStyle: {
        flex: 2,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'green',
    },
    textTitleStyle: {
        flex: 2,
        padding: 10,
        textAlign: 'left',
        fontSize: 20,
        color: '#aaa',
    },
})

function mapStateToProps(state) {
    return {
        newPlant: state.newPlant
    }
}

const mapDispatchToProps = {
    deletePlant,
    watchEachPlant,
    updatePlant
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