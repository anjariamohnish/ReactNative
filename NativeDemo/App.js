import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import store from './store';
import MainScreen from './screens/MainScreen';

export default class App extends Component {
  render() {

    const MainNavigator = createStackNavigator({
      Main: { screen: MainScreen }
    })

    return (
      <Provider store={store}>
        {/* <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View> */}
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
