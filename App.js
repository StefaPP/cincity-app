import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import LibraryList from './src/components/LibraryList';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv'

import firebase, { app } from 'firebase';
import RouterComponent from './Router';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class App extends Component {

  state = {
    loggedIn: null,
  }

  componentWillMount() {

    const config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    };
    firebase.initializeApp(config);
  }

  handleLogOut = () => {
    firebase.auth().signOut().then(() => this.setState({ loggedIn: false }))
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  }
}
