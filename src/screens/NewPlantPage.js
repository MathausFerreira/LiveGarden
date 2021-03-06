import React, { Component } from 'react';
import { Image, View, Slider, StyleSheet, TextInput, Button, Picker, Text, ScrollView, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';

import FormRow from '../components/FormRow';
import { connect } from 'react-redux'

import {setField, saveNewPlant, setWholePlant, resetForm} from '../actions';

class NewPlantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount(){
        const {navigation, setWholePlant, resetForm} = this.props;
        const {params} = navigation.state;

        if(params && params.plantToEdit){
            setWholePlant(params.plantToEdit);
        } else{
            resetForm();
        }
    }

    render() {
        const { newPlant, setField, saveNewPlant, navigation } = this.props;
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >
                <ScrollView style={styles.container}>
                    <View style={styles.viewLogo}>
                        <Image style={styles.logo} source={require('../images/Nova.png')} />
                    </View>
                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder='Nome da Planta'
                            value={newPlant.Name}
                            onChangeText={value => setField('Name', value)}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder='Especie'
                            value={newPlant.Species}
                            onChangeText={value => setField('Species', value)}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder='Imagem URL'
                            value={newPlant.Avatar}
                            onChangeText={value => setField('Avatar', value)}
                        />
                    </FormRow>
                    <FormRow>
                        <Picker selectedValue={newPlant.AvatarGender} onValueChange={(itemValue) => setField('AvatarGender', itemValue)} >
                            <Picker.Item label="Masculino" value="Masculino" />
                            <Picker.Item label="Feminino" value="Feminino" />
                            <Picker.Item label="Outro" value="Outro" />
                        </Picker>
                    </FormRow>
                    <FormRow>
                        <View style={styles.sameRow}>
                            <Text>Frequência :</Text>
                            <Text> {newPlant.IterationFrequency}</Text>
                        </View>
                        <Slider value={newPlant.IterationFrequency}
                            onValueChange={value => setField('IterationFrequency', value)}
                            minimumValue={0}
                            maximumValue={10}
                            step={1} />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            style={styles.input}
                            placeholder='Descrição (Opcional)'
                            value={newPlant.Notes}
                            onChangeText={value => setField('Notes', value)}
                            numberOfLines={4}
                            multiline={true}
                        />
                    </FormRow>
                    {
                        this.state.isLoading
                            ? <ActivityIndicator />
                            : <Button
                                title="Salvar"
                                onPress={async () => {
                                    this.setState({ isLoading: true });
                                    try {
                                        await saveNewPlant(newPlant);
                                        this.props.navigation.replace('Home');                                        
                                    } catch (error) {
                                        Alert.alert('Error!', 'error.message');
                                    } finally {
                                        this.setState({ isLoading: false })
                                    }
                                    this.setState({ isLoading: false });
                                }} />
                    }
                </ScrollView>
                <View style={{ height: 100 }} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    sameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    picker: {
        height: 50,
        width: 100,

    },
    container: {
        paddingTop: 0,
        paddingBottom: 10,
        marginBottom: 20,
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },
    logo: {
        height: 224,
        width: 156,
        borderWidth: 0,
        resizeMode:'stretch'
    },
    viewLogo: {
        padding: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
});

function mapStateToProps(state) {
    return {
        newPlant: state.newPlant
    }
}

const mapDispatchToProps = {
    setField,
    saveNewPlant,
    setWholePlant,
    resetForm,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlantPage);