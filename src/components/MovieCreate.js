import React, { PureComponent } from 'React';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { movieCreate } from '../actions/movieAction';
import MovieForm from './MovieForm';

class MovieCreate extends PureComponent {

  handleOnPress = () => {
    const { title, description } = this.props;

    this.props.movieCreate({ title, description });
  }

  render() {

    return (
      <Card>
        <MovieForm {...this.props} />
        <CardSection>
          <Button onPress={this.handleOnPress}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
};

const mapStateToProps = state => ({
  title: state.movieForm.title,
  description: state.movieForm.description
})

export default connect(mapStateToProps, { movieCreate })(MovieCreate);
