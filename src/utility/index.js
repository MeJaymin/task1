import {Platform, Alert, Dimensions, Keyboard} from 'react-native';
import * as titles from '../constants/title';

export const GET_DEVICE_TYPE = Platform.OS == 'android' ? 'ANDROID' : 'IOS';
var {height, width} = Dimensions.get('window');

export const CONST = {
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width,
};

export const getDeviceWidth = () => {
  return Math.round(Dimensions.get('window').width);
};
export const getDeviceHeight = () => {
  return Math.round(Dimensions.get('window').height);
};

export const getPageLimit = () => {
  return 10;
};

export const isFieldEmpty = text => {
  if (text === '') {
    return true;
  }
  return false;
};

export const isValidEmail = email => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === true) {
    return true;
  }
  return false;
};

export const getOS = () => {
  if (Platform.OS === 'ios') {
    return 'ios';
  }
  return 'android';
};

export const showAlert = message => {
  Alert.alert(
    titles.title.APP_NAME,
    message,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
};
