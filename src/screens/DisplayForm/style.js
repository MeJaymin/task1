import {StyleSheet, Platform} from 'react-native';
import {CONST} from '../../constants/Constants.global';
import {scale, vs} from 'react-native-size-matters';
import {
  whiteColor,
  TOOLBAR_UNDERLINE,
  BUTTON_GRADIENT1,
} from '../../constants/colors';

export default (styles = StyleSheet.create({
    
  viewMain: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: CONST.screenHeight,
    width: CONST.screenWidth,
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: "white"
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor:"white"
  },
 
  subView: {
    backgroundColor: whiteColor,
    width: CONST.screenWidth - 80,
    position: 'absolute',
    top: vs(30),
    right:0,
    marginHorizontal:20
  },
  textName:{
    color: 'black',
    position: 'absolute',
    right: 0,
    alignSelf: 'flex-end',
    fontSize: 20,
  }


 
}));
