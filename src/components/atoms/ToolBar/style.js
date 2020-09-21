import {StyleSheet} from 'react-native';
import * as colors from '../../../constants/colors';
import * as utility from '../../../utility';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default (styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    height: utility.getOS() === 'ios' ? moderateScale(64) : moderateScale(48),
     backgroundColor: colors.whiteColor,
     borderBottomColor: colors.TOOLBAR_UNDERLINE,
    borderBottomWidth: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'center',
    
  },
  titleText: {
    fontSize: moderateScale(18),
    marginLeft: scale(15),
    color: colors.BLACK_COLOR,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf:'center'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  imageContainer1: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  imageStyle: {
    width: scale(13), //18
    height: verticalScale(13), //18
    resizeMode: 'contain',
  },
  leftImageContainer: {
    width: scale(30),
    height: utility.getOS() === 'ios' ? verticalScale(64) : verticalScale(48),
    left: scale(16),
    marginRight: scale(20),
    position: 'absolute',
    justifyContent: 'center',
  
  },
  leftImageContainer1: {
    width: scale(30),
    height: utility.getOS() === 'ios' ? verticalScale(64) : verticalScale(48),
    left: scale(40),
    marginRight: scale(20),
    position: 'absolute',
    justifyContent: 'center',
    tintColor: colors.BLACK_COLOR,
  
  },
  imageStyle1: {
    width: scale(25), //18
    height: verticalScale(20), //18
    resizeMode: 'contain',
    tintColor: colors.BLACK_COLOR,
  },
  
}));
