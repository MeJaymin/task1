import {StyleSheet} from 'react-native';
import {scale, vs} from 'react-native-size-matters';
import {
  LIST_VIEW_BG,
  BLACK_COLOR,
  GREY_TEXT_COLOR,
  BUTTON_COLOR,
} from '../../constants/colors';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(26,25,35)',
    marginBottom: 60,
    justifyContent: 'flex-end',
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: 'rgb(26,25,35)',
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: 'rgb(26,25,35)',
  },
  listView: {
    marginTop: 20,
    backgroundColor: LIST_VIEW_BG,
    flexDirection: 'row',
  },

  textStyle: {
    marginHorizontal: 20,
    color: GREY_TEXT_COLOR,
    padding: 5,
    fontSize: scale(13),
  },
  textStyleEmail: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: scale(15),
    color: BLACK_COLOR,
  },
  loaderStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 55,
  },
  viewStyle: {justifyContent: 'center'},
  slideButton: {
    borderColor: BUTTON_COLOR,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: scale(20),
    width: '90%',
    marginVertical: scale(10),
    flexDirection: 'row',
    // height: 60,
    justifyContent: 'center',
  },
  viewSlide: {
    backgroundColor: BUTTON_COLOR,
    position: 'absolute',
    left: 0,
    top: 0,
    padding: scale(10),
    overflow: 'visible',
  },
  imageStyle: {
    height: scale(30),
    width: scale(30),

    tintColor: 'white',
  },
  textSlide: {
    padding: scale(16),
    color: BUTTON_COLOR,
    fontSize: scale(16),
    textAlign: 'center',
  },

  slideButtonStyle: {
    width: '90%',
    marginHorizontal: scale(20),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: BUTTON_COLOR,
    backgroundColor: 'transparent',
    marginTop: scale(5),
  },
}));
