import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import MyInputText from './MyInputText';
import MyButton from './MyButton';
import colors from '../shared/colors';

const description =
  'In order to reset your password. Please type in your E-Mail Address down below so we can send you a link to reset your password.';
class ModalResetPassword extends Component {
  onPressCloseModal = () => {
    this.props.onPressCloseModal();
  };
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.onPressCloseModal}
        
        >
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={this.onPressCloseModal}
          >
          <View style={styles.container} >
            <TouchableHighlight style={styles.containerModal}>
              <View
                style={{
                  flexDirection: 'column',
                  marginHorizontal: 24,
                }}>
                <View style={styles.barHeader}></View>
                <Text style={styles.txt_password_reset}>Password Reset</Text>
                <View style={styles.image}></View>
                <Text style={styles.txt_description}>{description}</Text>
                <MyInputText
                  label="E-MAIL ADDRESS"
                  containerStyle={{height: 60}}
                />
                <MyButton
                  label={'Send password reset link'}
                  buttonStyle={{marginVertical: 25}}
                />
                <View style={styles.bar_footer} />
              </View>
            </TouchableHighlight>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
export default ModalResetPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  containerModal: {
    backgroundColor: '#ffffff',
    width: '100%',
    alignContent: 'flex-end',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  barHeader: {
    height: 4,
    backgroundColor: colors.bar_grey,
    width: 60,
    borderRadius: 4,
    marginTop: 20,
    alignSelf: 'center',
  },
  txt_password_reset: {
    fontSize: 22,
    color: colors.black,
    marginTop: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    height: 50,
    width: 50,
    backgroundColor: colors.black,
    marginVertical: 50,
    alignSelf: 'center',
  },
  txt_description: {
    fontSize: 16,
    color: colors.black,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: 30,
  },
  bar_footer: {
    height: 4,
    borderRadius: 2,
    width: 150,
    marginBottom: 10,
    backgroundColor: colors.bar_grey,
    alignSelf: 'center',
  },
});
