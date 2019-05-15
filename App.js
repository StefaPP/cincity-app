import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
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
import LoginForm from './src/components/LoginForm';

import firebase, { app } from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';
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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
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
