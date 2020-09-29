import React from 'react';
import {BackHandler, Alert} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {connect} from 'react-redux';
import AppNavigator from './appRouteConfig';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import SplashScreen from 'react-native-splash-screen';

const App = createReduxContainer(AppNavigator);

class ReduxNavigation extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
    console.disableYellowBox = true;
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    let stackRoute = nav.routes;

    if (stackRoute.length <= 1) {
      if (stackRoute[0]) {
        if (stackRoute[0].routeName !== 'Home') {
          BackHandler.exitApp();
          return true;
        } else {
          let level = '1';
          let i = nav.routes[0].index;

          if (nav.routes[0].routes) {
            if (nav.routes[0]) {
              if (nav.routes[0].routes[i]) {
                let currentSelectedIndex = nav.routes[0].routes[i].index;
                if (currentSelectedIndex > 0) {
                  dispatch(NavigationActions.back());
                  return true;
                } else {
                  BackHandler.exitApp();
                  try {
                    const resetAction = StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({routeName: 'Home'}),
                      ],
                    });
                    dispatch(resetAction); //do reset here
                  } catch (error) {}
                  return true;
                }
              }
            }
          }
        }
      }
    }
    if (nav.index === 0) {
      return true;
    } else {
      dispatch(NavigationActions.back());
      return true;
    }
  };

  render() {
    const {nav, dispatch} = this.props;
    return <App state={nav} dispatch={dispatch} />;
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(ReduxNavigation);
