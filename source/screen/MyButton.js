import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import colors from '../shared/colors';
import PropTypes from 'prop-types';
class MyButton extends Component {
  static propTypes = {
    buttonStyle: PropTypes.any,
    textStyle: PropTypes.any,
    label: PropTypes.string,
  };
  static defaultProps = {
    label: 'Log in',
  };
  render() {
    return (
      <TouchableOpacity style={[styles.defaultButton, this.props.buttonStyle]}>
        <Text style={[styles.defaultText, this.props.textStyle]}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
export default MyButton;

const styles = StyleSheet.create({
  defaultButton: {
    height: 50,
    backgroundColor: colors.black,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
});
