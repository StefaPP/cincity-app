import React from 'react';
import map from 'lodash/map';

import { StyleSheet, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { fetchMovies } from '../actions/movieAction';

import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';

class MovieList extends React.PureComponent {

  state = {
    popupIsOpen: false,
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  openMovie = (movie) => {
    this.setState({
      popupIsOpen: true,
      movie,
    });
  }

  closeMovie = () => {
    this.setState({
      popupIsOpen: false,
    });
  }

  handleOnPress = (movie) => {
    console.log('opening the movie !', movie);
    Actions.movieEdit({ movie });
  }

  render() {
    const { movies } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {movies.map((movie, index) =>
            <MoviePoster
              movie={movie}
              onOpen={this.openMovie}
              key={index}
            />
          )}
        </ScrollView>
        <MoviePopup
          movie={this.state.movie}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeMovie}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});

const mapStateToProps = state => ({
  movies: map(state.movies.list, (val, uid) => ({ ...val, uid })),
});

export default connect(mapStateToProps, { fetchMovies })(MovieList);
