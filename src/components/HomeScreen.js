/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import AboutScreen from './index';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.myText}> Welcome Aboard  </Text>
                <Button title="Go to About Page"
                onPress={() => {this.props.navigation.navigate('About')}} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    myText:{
        fontSize:20,

    }
});