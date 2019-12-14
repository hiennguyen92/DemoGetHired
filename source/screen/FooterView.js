import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import colors from '../shared/colors';


class FooterView extends Component {
  onPressForgotPassword=()=>{
    this.props.onPressForgotPassword();
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onPressForgotPassword}>
          <Text style={styles.txtForgot}>I've forgot my password.</Text>
        </TouchableOpacity>
        <View style={styles.viewFoot}></View>
      </View>
    );
  }
}
export default FooterView;
const styles = StyleSheet.create({
  txtForgot: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    marginBottom: 18,
  },
  viewFoot: {
    width: 150,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.black,
    alignSelf: 'center',
    marginBottom: 14,
  },
});
