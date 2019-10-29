/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
// import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import Mockup from './Mockup';
import Properties from './Properties';
import PostProperties from './PostProperties';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  About: {
    screen: AboutScreen,
  },
  Properties,
  PostProperties
},
{
        initialRouteName: 'Properties'
});

// const AppNavigator1 = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//   },
//   Mockup: {
//     screen: Mockup,
//   }
// },
// {
//         initialRouteName: 'Login'
// });

const AppNavigator2 = createBottomTabNavigator({
  Home: AppNavigator,  
  Login: LoginScreen
  
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopColor: 'red',
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'normal',
    },
    indicatorStyle: {
      borderBottomColor: 'red',
      borderBottomWidth: 4,
    },
  }
});

export default createAppContainer(AppNavigator);