import React from 'react';
import { View, Text, ListView } from 'react-native';
import { Card, CardSection } from './common';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieAction';
import map from 'lodash/map';

class MovieList extends React.PureComponent {

  state = {
    dataSource: null,
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.movies && nextProps.movies !== prevState.dataSource) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });
      return {
        dataSource: ds.cloneWithRows(nextProps.movies),
      }
    }
    return null;
  }

  render() {
    const { movies } = this.props;
    console.log(this.state.dataSource);
    return (
      <View>
        <Text>
          Movie list
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  movies: map(state.movies.list, (val, uid) => ({ ...val, uid })) ,
})

export default connect(mapStateToProps, { fetchMovies })(MovieList);
