import React, {Component} from 'react'; 
import {Image, View, Text, StyleSheet, TextInput, Button, ActivityIndicator, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import FormRow from '../components/FormRow';

//cria uma classe filha de component
export default class Login extends Component{
    constructor(props){
        super(props);
            this.state={
                mail:"",
                password:"",
                isloading: false,
                message:"",
            }
    }

componentDidMount(){
    const config = {
        // Configurar o firebase aqui


    };
};
trylogin(){
    this.props.navigation.navigate('Home');
}

renderButton(){
    if(this.state.isloading)
    return <ActivityIndicator/>;
    return(<Button title = 'Entrar' onPress={()=>this.trylogin()}/> )

}
renderMessage(){
    const {message} = this.state;
    if(!message)
    return null;

    return(
        <View>
            <Text> {message}</Text>
        </View>
    )

}

onChangeHandler(field, value){
    this.setState({
        [field]:value
    });
}


render(){
    return(
        <View style = {styles.container}>
            <View style = {styles.viewLogo}>
                  <Image style = {styles.logo} source={require('../images/flower.png')} />
            </View>
            <FormRow>
                <TextInput style = {styles.input} clearButtonMode = 'always' placeholder='User@mail.com.br' value = {this.state.email} onChangeText={value=>this.onChangeHandler('mail',value)}/>
            </FormRow>
            <FormRow>
                <TextInput style = {styles.input} clearButtonMode = 'always' placeholder='******' secureTextEntry value = {this.state.password} onChangeText={value=>this.onChangeHandler('password',value)}/>
            </FormRow>
            {this.renderButton()}
            {this.renderMessage()}
            <View style = {styles.inline}>
              <Icon name="facebook-official" size={30} color="#3B5699" />
              <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
              <Text style={styles.buttonBlueText}>with Facebook</Text>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        paddingBottom:10,
        marginBottom: 20,
    },
    logo: {
        width:150,
        height:150,
        borderWidth: 0,
    },
    viewLogo: {
        padding: 30,
        flexDirection:'column',
        alignItems:'center'
    },

    input:{
        paddingLeft: 5,
        paddingRight:5,
        paddingBottom:5,
    },

    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 16,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    inline: {
        marginTop:30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
});