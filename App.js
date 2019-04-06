/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './src/components/common';
import { LoginForm } from './src/components/LoginForm';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv'

import firebase from 'firebase';

type Props = {};
export default class App extends Component<Props> {

  state = {
    loggedIn: null,
  }

  componentDidMount() {

    const config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    };
    console.log(config);
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: user ? true : false });
    });
  }

  handleLogOut = () => {
    firebase.auth().signOut().then(() => this.setState({ loggedIn: false }))
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={this.handleLogOut}> Log out </Button>
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
  }

  render() {
    console.log(this.state.loggedIn)
    return (
      <View style={styles.container}>
        <Header text={'CinCity'} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  }
}
