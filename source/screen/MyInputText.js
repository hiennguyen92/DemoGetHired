import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../shared/colors';
import PropTypes from 'prop-types';
class MyInputText extends Component {
  static propTypes = {
    borderStyle: PropTypes.any,
    textStyle: PropTypes.any,
    label: PropTypes.string,
    containerStyle: PropTypes.any,
    isPassword:PropTypes.bool
  };
  static defaultProps = {
    label: 'E-MAIL ADDRESS',
    isPassword:false
  };
  render() {
    return (
      <View style={[{height: 50}, this.props.containerStyle]}>
        <View style={[styles.borderStyle, this.props.borderStyle]}>
          <TextInput style={[styles.inputTextStyle, this.props.textStyle]} secureTextEntry={this.props.isPassword}/>
        </View>
        <View style={styles.labelBackground}>
          <Text style={styles.fontSizeLabel}>{this.props.label}</Text>
        </View>
      </View>
    );
  }
}
export default MyInputText;

const styles = StyleSheet.create({
  borderStyle: {
    flex: 1,
    marginTop: 7,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.warm_grey,
  },
  inputTextStyle: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 14,
    color: colors.black,
  },
  labelBackground: {
    position: 'absolute',
    marginLeft: 20,
    paddingHorizontal: 3,
    backgroundColor: colors.white,
  },
  fontSizeLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.black,
  },
});
