import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../shared/colors';

const description =
  'It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout.';
class HeaderView extends Component {
  render() {
    return (
      <View style={styles.containerHeader}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txtTitle}>GetHired.ai</Text>
          <Text style={styles.txtDescription}>{description}</Text>
        </View>
      </View>
    );
  }
}
export default HeaderView;
const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 110,
  },
  txtTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
  },
  txtDescription: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 19,
    marginTop: 40,
  },
});
