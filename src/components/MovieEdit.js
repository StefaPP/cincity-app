import React, { PureComponent } from 'React';
import { each } from 'lodash';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import { movieEdit, movieUpdate, movieDelete } from '../actions/movieAction';
import MovieForm from './MovieForm';

class MovieEdit extends PureComponent {

  state = {
    visible: false,
  };

  componentDidMount() {
    const { movie, movieUpdate: movieUpdateRedux } = this.props;

    each(movie, (value, prop) => {
      movieUpdateRedux({ prop, value });
    })
  }

  handleOnPress = () => {
    const { title, description, poster } = this.props;
    console.log(title, description, poster);
    this.props.movieEdit({ title, description, poster, uid: this.props.movie.uid });
  }

  handleAccept = () => {
    const { movie, movieDelete: movieDeleteRedux } = this.props;

    movieDeleteRedux(movie.uid);
  }

  handleToggleModal = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  }

  render() {

    return (
      <Card>
        <MovieForm {...this.props} />
        <CardSection>
          <Button onPress={this.handleOnPress}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleToggleModal}>Delete Movie</Button>
        </CardSection>
        <Confirm
          handleAccept={this.handleAccept}
          handlDecline={this.handleToggleModal}
          visible={this.state.visible}
        >
          Are you sure you want to delete this
        </Confirm>
      </Card>
    );
  }
};

const mapStateToProps = state => ({
  title: state.movieForm.title,
  description: state.movieForm.description,
  poster: state.movieForm.poster,
})

export default connect(mapStateToProps, { movieEdit, movieUpdate, movieDelete })(MovieEdit);
