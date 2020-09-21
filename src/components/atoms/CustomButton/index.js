import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';

export class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.buttonView, this.props.moreContainerStyle]}
        onPress={this.props.onPress}>
        <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
