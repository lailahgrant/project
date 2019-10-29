/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.myText}> this is the about page </Text>
                <Text>My name is LAilah Grant</Text>
                <Button title="Go to About Page"
                onPress={() => {this.props.navigation.navigate('Home')}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    myText:{
        fontSize:20,

    }
});