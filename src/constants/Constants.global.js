import React from 'react';
import { Dimensions } from "react-native";
var { height, width } = Dimensions.get('window');

export const CONST = {
    appName : "Task",

    maxLengthForEmail : 16,
    maxLengthPassword : 9,
    screenWidth : width,
    screenHeight : height,
};
