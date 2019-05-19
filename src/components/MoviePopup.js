import React, { PureComponent } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Image
} from 'react-native'
import { defaultStyles } from './styles';

const { width, height } = Dimensions.get('window');

export default class MoviePopup extends PureComponent {

  state = {
    position: new Animated.Value(this.props.isOpen ? 0 : height),
    visible: this.props.isOpen,
  };

  // Handle isOpen changes to either open or close popup
  componentWillReceiveProps(nextProps) {
    // isOpen prop changed to true from false
    if (!this.props.isOpen && nextProps.isOpen) {
      this.animateOpen();
    }
    // isOpen prop changed to false from true
    else if (this.props.isOpen && !nextProps.isOpen) {
      this.animateClose();
    }
  }

  // Open popup
  animateOpen() {
    // Update state first
    this.setState({ visible: true }, () => {
      // And slide up
      Animated.timing(
        this.state.position, { toValue: 0 }     // top of the screen
      ).start();
    });
  }

  // Close popup
  animateClose() {
    // Slide down
    Animated.timing(
      this.state.position, { toValue: height }  // bottom of the screen
    ).start(() => this.setState({ visible: false }));
  }

  render() {
    const {
      movie,
    } = this.props;

    const { title, description, genre, poster, days, times } = movie || {};

    if (!this.state.visible) {
      return null;
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.props.onClose}>
          <Animated.View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={[styles.modal, {
            transform: [{ translateY: this.state.position }, { translateX: 0 }]
          }]}
        >
          <View style={styles.content}>
            <View style={styles.movieContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: poster }} style={styles.image} />
              </View>
              <View style={styles.movieInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text>{description}</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableHighlight
              underlayColor="#9575CD"
              style={styles.buttonContainer}
              onPress={() => {}}
            >
              <Text style={styles.button}>Book My Tickets</Text>
            </TouchableHighlight>
          </View>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // Main container
  container: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    justifyContent: 'flex-end',         // align popup at the bottom
    backgroundColor: 'transparent',     // transparent background
  },
  movieContainer: {
    flex: 1,                            // take up all available space
    marginBottom: 20,
  },
  content: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
  },
  imageContainer: {
    flex: 1,  // take up all available space
    width: width / 2,
  },
  image: {
    borderRadius: 10,            // rounded corners
    ...StyleSheet.absoluteFillObject,   // fill up all space in a container
  },
  // Semi-transparent background below popup
  backdrop: {
    ...StyleSheet.absoluteFillObject,   // fill up all screen
    backgroundColor: 'black',
    opacity: 0.5,
  },
  movieInfo: {
    backgroundColor: 'transparent',     // looks nicier when switching to/from expanded mode
    flex: 0,
    alignItems: 'center',     // center horizontally
    paddingTop: 20,
  },
  title: {
    ...defaultStyles.text,
    fontSize: 20,
  },
  // Popup
  modal: {
    height: height / 2,                 // take half of screen height
    backgroundColor: 'white',
  },
  footer: {
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: '#673AB7',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  button: {
    ...defaultStyles.text,
    color: '#FFFFFF',
    fontSize: 18,
  },
});