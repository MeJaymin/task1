/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text, Button } from "react-native";
import styles from "./style";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import * as colors from "../../../constants/colors";


export default class ToolBar extends Component {
  onBackPress() {
    this.props.onBackPress();
  }
 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {this.props.title}
          </Text>
        </View>
        {/* LEFT IMAGE */}
        {this.props.leftImage != undefined ? (
          <TouchableOpacity
            style={styles.leftImageContainer}
            onPress={this.onBackPress.bind(this)}
          >
            <View style={styles.imageContainer}>
              <Image
                style={[styles.imageStyle, this.props.customTextStyle]}
                // source={{
                //   uri: this.props.leftImage
                // }}
                source={this.props.leftImage}
                // source={require(this.props.leftImage)}
              />
            </View>
          </TouchableOpacity>
        ) : null}



       
      </View>
    );
  }
}
