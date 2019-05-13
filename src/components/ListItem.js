import React from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.PureComponent {

  handleOnPress = () => {
    const { library, selectLibrary } = this.props;

    selectLibrary(library.item.id);
  };

  renderDescription = () => (
    <CardSection>
      <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
    </CardSection>
  );

  render() {
    const { library, expanded } = this.props;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={this.handleOnPress}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {library.item.title}
            </Text>
          </CardSection>
          {expanded && this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
