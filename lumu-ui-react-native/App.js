import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/navigator';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}