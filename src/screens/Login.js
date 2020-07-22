import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import FormRow from '../components/FormRow';
import { connect } from 'react-redux'
import { tryLogin } from '../actions';


//cria uma classe filha de component
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isloading: false,
            message: "",
        }
    }

    componentDidMount() {
        
        this.setState({
            email: "mathaus@hotmail.com",
            password: "123123"
        })
        
        const config = {
            // Configurar o firebase aqui
            apiKey: "AIzaSyAyUw6tK9IFnasvM274uXpNoqSvPyH8WRk",
            authDomain: "livegarden-514ff.firebaseapp.com",
            databaseURL: "https://livegarden-514ff.firebaseio.com",
            projectId: "livegarden-514ff",
            storageBucket: "livegarden-514ff.appspot.com",
            messagingSenderId: "901781537223",
            appId: "1:901781537223:web:b58eaefccf144dab0119e2"
        };
        // Initialize Firebase
        firebase.initializeApp(config);
    };

    resetInput = () => {
        this.setState({
            email: "",
            password: '',
        })
    }

    tryLogin() {
        this.setState({ isloading: true, message: '' });
        const { email, password } = this.state;

        this.props.tryLogin({ email, password })
            .then(user => {
                if (user) {
                    if (user.additionalUserInfo.isNewUser) {
                        return this.props.navigation.replace('NewPlantPage');
                    } else {
                        return this.props.navigation.replace('Home');
                    }
                }
                this.setState({
                    isloading: false,
                    message: ''
                });
            })
            .catch(error => {
                this.setState({
                    isloading: false,
                    message: this.getMessageErrorCode(error.code)
                });
            });
    }

    renderButton() {
        if (this.state.isloading)
            return <ActivityIndicator />;
        return (<Button title='Entrar' onPress={() => this.tryLogin()} />)
    }

    getMessageErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta'

            case 'auth/user-not-found':
                return 'Usuário não encontrado'

            case 'auth/invalid-email':
                return 'E-mail inválido'

            default:
                return errorCode
        }
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;

        return (
            <View>
                <Text> {message}</Text>
            </View>
        )
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewLogo}>
                    <Image style={styles.logo} source={require('../images/Login.png')} />
                </View>
                <FormRow>
                    <TextInput style={styles.input} clearButtonMode='always' placeholder='User@mail.com.br' value={this.state.email} onChangeText={value => this.onChangeHandler('email', value)} keyboardType='email-address' autoCapitalize='none' />
                </FormRow>
                <FormRow>
                    <TextInput style={styles.input} clearButtonMode='always' placeholder='******' secureTextEntry value={this.state.password} onChangeText={value => this.onChangeHandler('password', value)} />
                </FormRow>
                {this.renderButton()}
                {this.renderMessage()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
        marginTop:20,
    },
    logo: {
        // aspectRatio: 2,
        height: 224,
        width: 156,
        borderWidth: 0,
        resizeMode:'stretch'
    },
    viewLogo: {
        padding: 1,
        height: 250,
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    }
});

export default connect(null, { tryLogin })(Login)