import React, { Component } from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import App from './appSrc/App';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class BottomNavigationTab extends Component {

    render(){
      const { navigation } = this.props;

      return (
        <App />
      );
    }
  }

AppRegistry.registerComponent('BottomNavigationTab', () => App);