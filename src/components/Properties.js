import React, {Component} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import axios from 'axios';

class Properties extends Component {
  state = {
    properties: [],
    error: '',
  };

  componentDidMount = () => {
    axios
      .get('https://mololo-items.firebaseio.com/properties.json')
      .then(res => {
        //const data = Object.values(res.data);
        console.log('Data Debugger XXXXX', res.data);
        this.setState({properties: res.data});
      })
      .catch(err => {
        this.setState({error: 'Failed to fetch load from data'});
      });
  };

  renderItem = item => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.lastname}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  render() {
    // const Item = ({name, lastname, price}) => {
    //   return (
    //     <View>
    //       <Text>{name}</Text>
    //       <Text>{lastname}</Text>
    //       <Text>{price}</Text>
    //     </View>
    //   );
    // };

    return (
      <View>
        <Text>Properties Window!!!</Text>
        <FlatList
          data={this.state.properties}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.lastname}</Text>
              <Text>{item.price}</Text>
            </View>
          )}
        />
        <Button
          title="Go to Add Property"
          onPress={() => {
            this.props.navigation.navigate('PostProperties');
          }}
        />
      </View>
    );
  }
}

export default Properties;
