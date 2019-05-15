import React, { PureComponent } from 'React';
import { Card, CardSection, Button, Input } from './common';
import { connect } from 'react-redux';
import { movieUpdate, movieCreate } from '../actions/movieAction';

class MovieCreate extends PureComponent {

  handleOnPress = () => {
    const { title, description } = this.props;

    this.props.movieCreate({ title, description });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Title"
            placeholder="Enter title"
            value={this.props.title}
            onChangeText={value => this.props.movieUpdate({ prop: 'title', value })}
          />
        </CardSection>


        <CardSection>
          <Input
            label="Description"
            placeholder="Enter description"
            value={this.props.description}
            onChangeText={value => this.props.movieUpdate({ prop: 'description', value })}
          />
        </CardSection>


        <CardSection>
        </CardSection>


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


export default connect(mapStateToProps, { movieUpdate, movieCreate })(MovieCreate);
