import React from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Spinner, Input } from './common';
import firebase from 'firebase';

class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  handleEmailChange = (email) => {
    this.setState(() => ({
      email
    }))
  }

  handlePasswordChange = (password) => {
    this.setState(() => ({
      password,
    }))
  }

  handleOnPress = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess) 
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess)  
        .catch(this.onLoginFail)
      })
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    })
  }

  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />
    }
    return (
      <Button onPress={this.handleOnPress}> Log in </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={this.handleEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle} >
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export { LoginForm }