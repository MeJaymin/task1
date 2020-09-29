import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {connect} from 'react-redux';
import styles from './style';
import {setUserData} from '../../store/Auth/actions';
import {ToolBar} from '../../components/atoms';
import {BACK_ARROW} from '../../assets/images';

class DisplayForm extends Component {
  constructor(props) {
    super(props);
  }

  //RENDER
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
              title={'Details'}
              leftImage={BACK_ARROW}
              onBackPress={() => {
                this.props.navigation.goBack(null);
              }}
            />
            <View style={styles.viewMain}>
              <View style={styles.subView}>
                <Text style={styles.textName}>
                  {this.props.userData ? this.props.userData : null}
                </Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {loading, userData} = state.auth;
  return {
    loading,
    userData,
  };
};

export default connect(
  mapStateToProps,
  {setUserData},
)(DisplayForm);
