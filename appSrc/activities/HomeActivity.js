import React, { Component } from 'react';
import { View, Text } from 'react-native';
import index from '../css';

export default class HomeActivity extends Component {
  render() {
    return (
      <View style={index.Container}>
        <Text style={index.TextHeader}>Android Codility</Text>
        <View style={{ width: '100%', height: '.5%', backgroundColor:'red', marginTop:'2%'}}/>
        
        <View style={index.Container}>
          <Text style={index.TextStyle}>Home Screen</Text>
        </View>
      </View>
    );
  }
}
