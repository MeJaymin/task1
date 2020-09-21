import {StyleSheet} from 'react-native';

import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default (styles = StyleSheet.create({
  buttonView: {
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    // marginBottom: 30,
    // padding:5,
    alignItems: 'center',
    backgroundColor: 'rgb(124,176,241)',
    marginHorizontal: scale(20),
    width: '90%',
    marginVertical: scale(10),
  },
  buttonText: {
    padding: scale(16), color: 'white', fontSize: scale(16)
    // fontFamily: fonts.FONT_MONTSERRAT_BOLD
  },
}));
