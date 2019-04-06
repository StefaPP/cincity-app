import React from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';
import { Input } from './common/Input';

class LoginForm extends React.Component {

  state = {
    email: '',
    password: ''
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

        <CardSection>
          <Button text="Log in" />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
}

export { LoginForm }