/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button, StyleSheet } from 'react-native';


export default class Mockup extends Component {

    state ={
        isFocused :false
    };

    handleFocus = e =>{
        this.setState({isFocused:true});

        if(this.props.onFocus){
            this.props.onFocus(e);
        };
    }

    handleBlur =e =>{
        this.setState({isFocused:true});

        if(this.props.onBlur){
            this.props.onBlur(e);
        }
    }


    render() {

        const {isFocused} =this.state;

        const {onBlur, onFocus, ...otherProps}= this.props;

        return (
            <View style={mystyles.container}>
                
                <View  >
                <Text style={mystyles.mytext}> My mock up challenge </Text>
                </View>

                <View style={mystyles.myimage} >
                    <Image source={require('../../assets/sky1.jpg')}/>
                </View>

                <View>
                    <Button style={mystyles.mybutton} title="read more" />
                </View>

                <View  style={mystyles.otherimage}>
                    <Image source={require('../../assets/10.jpg')}/>
                </View>

                <View style={mystyles.cont} >
                    <TextInput style={mystyles.textinput}  
                    onFocus={this.handleFocus} onBlur={this.handleBlur}
                    placeholder={'enter your email'} />
                    <Button style={mystyles.otherbutton} title="send" />
                </View>

            </View>
        );
    }
}

const mystyles = StyleSheet.create({
   container : {
       alignItems: 'center',
       paddingTop:50,
       backgroundColor: '#efebe9',
   } ,
   mytext:{
       color:'#ff0c43',
       fontSize:20,
   },
   myimage :{
       padding:30,
   },
   mybutton:{
    backgroundColor : '#ffcfbc',
   },
   otherimage:{
       height: '40%', width:'40%',paddingTop:30,
   },
   cont :{
       flexDirection:'row',
   }, 
   otherbutton:{
    
   },
   textinput:{
    width:200,
    color:'green',
    marginRight:10,
    // margin: 15,
    //   height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   }
});