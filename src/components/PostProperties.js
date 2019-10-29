/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

export default class PostProperties extends Component {
  render() {
    return (
      <View>
        <Text> enter your properties </Text>
        <View >
            <TextInput style={styles.mytextinput} placeholder="enter last name"/>
            <TextInput style={styles.mytextinput} placeholder="enter name of property" />
            <TextInput style={styles.mytextinput} placeholder="enter price of property" />
            <Button
          title="register property"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mytextinput:{
        width:200,
        color:'green',
        marginLeft:10,
        marginBottom:10,
        // margin: 15,
          height: 30,
          borderColor: '#7a42f4',
          borderWidth: 1
       }
});