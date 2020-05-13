import React from 'react';
import {View, Image, StyleSheet,Text, TouchableOpacity} from 'react-native';

// aqui é construido a cara do componente da lista
const AvailableDevice = (props) =>{
    const {eachItem, Name, navigateToDetail} = props;
    return(
        <TouchableOpacity  onPress={()=>{navigateToDetail({eachItem});}}>
            <View style={styles.line} >
                <Image style ={styles.avatar} source={require('../images/flower.png')}/>
                <Text style = {styles.lineText}> {Name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderColor:'black',
        borderRadius:10,
        borderWidth:2,

    },
    avatar:{
        aspectRatio:1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 30,
    },
    line:{
        height: 60,
        borderBottomWidth:1,
        borderBottomColor:'red',
        alignItems:'center',
        flexDirection:'row',

    },
    lineText:{
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
});

export default AvailableDevice;