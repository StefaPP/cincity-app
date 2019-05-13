import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header, Button, Spinner } from './src/components/common';
import LibraryList from './src/components/LibraryList';
import reducers from './src/reducers';
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
    // firebase.initializeApp(config);

    // firebase.auth().onAuthStateChanged((user) => {
    //   this.setState({ loggedIn: user ? true : false });
    // });
  }

  handleLogOut = () => {
    firebase.auth().signOut().then(() => this.setState({ loggedIn: false }))
  }

  renderContent() {
    // switch (this.state.loggedIn) {
      // case true:
        return <LibraryList />
    //   case false:
    //     return <LoginForm />
    //   default:
    //     return <Spinner />
    // }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header text={'CinCity'} />
          {this.renderContent()}
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
