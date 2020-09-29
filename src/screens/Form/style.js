import {StyleSheet, Platform} from 'react-native';
import {CONST} from '../../constants/Constants.global';
import {scale, vs} from 'react-native-size-matters';
import {
  whiteColor,
  TOOLBAR_UNDERLINE,
  BUTTON_GRADIENT1,
} from '../../constants/colors';

export default (styles = StyleSheet.create({
    
  loginViewMain: {
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
 
  loginView: {
    backgroundColor: whiteColor,
    width: CONST.screenWidth - 80,
    position: 'absolute',
    top: vs(30),
  },



  textInputStyle: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: TOOLBAR_UNDERLINE,
    paddingVertical: 10,
    marginVertical: 10,
    color:"black"
  },
  btnStyle: {
    backgroundColor: BUTTON_GRADIENT1,
    width: '70%',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: vs(50),
  },
  btnText: {
    color: whiteColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
}));
