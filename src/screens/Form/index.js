/* eslint-disable no-lone-blocks */
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {connect} from 'react-redux';
import styles from './style';
import {
  checkEmailExist,
  setUserData,
} from '../../store/Auth/actions';
import {PLACEHOLDER_COLOR} from '../../constants/colors';
import {showAlert, isFieldEmpty} from '../../utility';
import {ToolBar} from '../../components/atoms';
import {BACK_ARROW} from '../../assets/images';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
    };
  }

  //handle first name
  handleFirstName = text => {
    this.setState({firstName: text});
  };

  //Submit press
  onSubmitPress() {
    if (isFieldEmpty(this.state.firstName)) {
      showAlert('enter first name');
      return false;
    } else {
      this.props.setUserData(this.state.firstName);
      console.log('form first name last name==> ', this.props.userData);
      this.props.navigation.goBack();
      return false;
    }
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.bottomSafeArea}>
          <KeyboardAwareScrollView
            bounces={false}
            behavior="padding"
            keyboardShouldPersistTaps={'handled'}
            resetScrollToCoords={{x: 0, y: 0}}
            overScrollMode={'never'}
            automaticallyAdjustContentInsets={false}
            enableOnAndroid={false}>
            <ToolBar
              title={'Enter Details'}
              leftImage={BACK_ARROW}
              onBackPress={() => {
                this.props.navigation.goBack(null);
              }}
            />
            <View style={styles.loginViewMain}>
              <View style={styles.loginView}>
                <Text style={{width: '90%', alignSelf: 'center'}}>
                  Enter your name
                </Text>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="First Name"
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  autoCapitalize="none"
                  onChangeText={this.handleFirstName}
                />
                <TouchableOpacity
                  style={styles.btnStyle}
                  onPress={() => {
                    {
                      this.onSubmitPress();
                    }
                  }}>
                  <Text style={styles.btnText}>{'Save'}</Text>
                </TouchableOpacity>
              </View>

            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('Login state==> ', state);
  const {loading, userData, validUser, firstName, lastName} = state.auth;
  return {
    loading,
    userData,
    validUser,
    firstName,
    lastName,
  };
};

export default connect(
  mapStateToProps,
  {checkEmailExist, setUserData},
)(Form);
