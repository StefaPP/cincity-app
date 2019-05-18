import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { movieUpdate } from '../actions/movieAction';

class MovieForm extends React.PureComponent {

  render() {
    const { title, description, poster } = this.props;

    return (
      <Card>
        <CardSection>
          <Image
            style={{ width: 200, height: 100 }}
            source={{ uri: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg' }}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Title"
            placeholder="Enter title"
            value={title}
            onChangeText={value => this.props.movieUpdate({ prop: 'title', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Description"
            placeholder="Enter description"
            value={description}
            onChangeText={value => this.props.movieUpdate({ prop: 'description', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Poster"
            placeholder="Add poster"
            value={poster}
            onChangeText={value => this.props.movieUpdate({ prop: 'poster', value })}
          />
        </CardSection>
      </Card>
    )
  }
};

const mapStateToProps = state => ({
  title: state.movieForm.title,
  description: state.movieForm.description,
  poster: state.movieForm.poster
})

export default connect(mapStateToProps, { movieUpdate })(MovieForm);
