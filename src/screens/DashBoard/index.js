/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  NativeModules,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import {getUserData} from '../../store/Auth/actions';
import {scale, vs} from 'react-native-size-matters';
import CustomButton from '../../components/atoms/CustomButton';
import {BUTTON} from '../../assets/images';
import {RNSlidingButton, SlideDirection} from 'rn-sliding-button';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDevice: false,
    };
  }

  componentDidMount() {
    this.checkIsDevice();
  }

  //CHECK DEVICE OR SIMULATOR USING NATIVE BRIDGE
  checkIsDevice() {
    NativeModules.DeviceCheck.checkIsEmulator();

    NativeModules.DeviceCheck.getStatusDevice((error, isEmulator) => {
      console.log('native log==>', isEmulator);
      if (isEmulator) {
        this.setState({isDevice: false});
      } else {
        this.setState({isDevice: true});
      }
    });
  }

  //ON SLIDE BUTTON ACTION
  onSlide = () => {
    this.props.navigation.navigate('DisplayForm');
  };

  //SUBMIT PRESS
  onPressSubmit() {
    this.props.navigation.navigate('DisplayForm');
  }
  //ADD DETAILS BUTTON ACTION
  openForm() {
    this.props.navigation.navigate('Form');
  }

  //RENDER
  render() {
    return (
      <>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.bottomSafeArea}>
          <View style={styles.container}>
            <View style={{alignSelf: 'center'}}>
              {this.state.isDevice ? (
                <Text style={{color: 'white'}}> This is your real device</Text>
              ) : (
                <Text style={{color: 'white'}}>
                  {Platform.OS === 'ios'
                    ? 'This is simulator'
                    : 'This is an emulator'}
                </Text>
              )}
            </View>
            <CustomButton
              moreContainerStyle={{
                borderColor: 'transparent',
                backgroundColor: 'transparent',
              }}
              textStyle={{color: 'rgb(124,176,241)'}}
              onPress={() => this.openForm()}
              buttonTitle={'Press me'}
            />
            <CustomButton
              moreContainerStyle={{
                borderColor: 'transparent',
                backgroundColor: 'rgb(55,66,73)',
              }}
              textStyle={{color: 'rgb(124,176,241)'}}
              onPress={() => this.onPressSubmit()}
              buttonTitle={'Press me'}
            />
            <CustomButton
              onPress={() => this.onPressSubmit()}
              buttonTitle={'Press me'}
            />
            <View>
              <RNSlidingButton
                style={styles.slideButtonStyle}
                height={scale(55)}
                onSlidingSuccess={this.onSlide}
                slideDirection={SlideDirection.ANY}>
                <View style={styles.viewSlide}>
                  <Image
                    source={BUTTON}
                    style={styles.imageStyle}
                    resizeMode="center"
                  />
                </View>
                <Text style={styles.textSlide}>Slide me to continue</Text>
              </RNSlidingButton>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {loading, userData, empData} = state.auth;
  return {
    loading,
    userData,
    empData,
  };
};

export default connect(
  mapStateToProps,
  {getUserData},
)(DashBoard);
