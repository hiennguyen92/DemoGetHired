import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from 'react-native';
import colors from '../shared/colors';
import MyInputText from './MyInputText';
import MyButton from './MyButton';
import HeaderView from './HeaderView';
import FooterView from './FooterView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalResetPassword from './ModalResetPassword';
const description =
  'In order to reset your password. Please type in your E-Mail Address down below so we can send you a link to reset your password.';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  onPressForgotPassword = () => {
    this.setModalVisible(true);
  };

  onCloseModal = () => {
    this.setModalVisible(false);
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          {/* <StatusBar translucent backgroundColor="transparent" /> */}
          <View style={{flex: 1}} />

          <HeaderView />
          <MyInputText label="E-MAIL ADDRESS" containerStyle={{height: 55}} />
          <MyInputText
            label="YOUR PASSWORD"
            containerStyle={{height: 55, marginTop: 25}}
            isPassword={true}
          />
          <MyButton label={'Log in'} buttonStyle={{marginVertical: 20}} />
          <FooterView onPressForgotPassword={this.onPressForgotPassword} />

          <ModalResetPassword
            modalVisible={this.state.modalVisible}
            onPressCloseModal={this.onCloseModal}
          />
        </View>
      </ScrollView>
    );
  }
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
  },
});
