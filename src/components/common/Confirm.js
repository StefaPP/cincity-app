import React, { PureComponent } from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, handleAccept, handlDecline }) => (
  <Modal
    visible={visible}
    transparent
    animationType="slide"
    onRequestClose={() => { }}
  >
    <View style={styles.containerStyle}>
      <CardSection style={styles.cardSectionStyle}>
        <Text style={styles.textStyle}>{children}</Text>
      </CardSection>
      <CardSection>
        <Button onPress={handleAccept}>Yes</Button>
        <Button onPress={handlDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
);

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { Confirm };
