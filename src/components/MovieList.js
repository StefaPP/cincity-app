import React from 'react';
import map from 'lodash/map';
import { ListView } from 'react-native';
import { ListItem } from './ListItem';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieAction';

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

  renderRow(movie) {
    return <ListItem movie={movie} />
  }

  render() {
    const { dataSource } = this.state;

    return (
      <ListView
        enableEmptySections
        dataSource={dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => ({
  movies: map(state.movies.list, (val, uid) => ({ ...val, uid })),
});

export default connect(mapStateToProps, { fetchMovies })(MovieList);
