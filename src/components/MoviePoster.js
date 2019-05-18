import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');

const cols = 3; rows = 3;

export default class MoviePoster extends PureComponent {

  static propTypes = {
    movie: object,
    onOpen: func
  };

  handleOnOpen = (movie) => (e) => {
    if (this.props.onOpen)
      this.props.onOpen(movie)
  }

  render() {
    const { movie, movie: { title, description, poster }, onOpen } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this.handleOnOpen(movie)}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: poster }}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          // take up all available space
  },
  image: {
    borderRadius: 10,                 // rounded corners
    ...StyleSheet.absoluteFillObject, // fill up all space in a container
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  },
  genre: {
    ...defaultStyles.text,
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});