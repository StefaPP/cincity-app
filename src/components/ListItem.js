import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends React.PureComponent {
  
  handleOnPress = () => {
    Actions.movieEdit({ movie: this.props.movie });
  }

  render() {
    const { movie } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={this.handleOnPress}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {movie.title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export { ListItem };
