/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/components/common';
import { LoginForm } from './src/components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header text={'CinCity'} />
        <LoginForm />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  }
}
