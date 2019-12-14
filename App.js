/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginScreen from './source/screen/LoginScreen';


class App extends Component {
  render() {
    

    return (
        <LoginScreen/>
    )
}
}
export default App;
