import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  DashBoard,Form,DisplayForm
} from 'screens';

const AppNavigator = createStackNavigator(
  {

     DashBoard: {screen: DashBoard},
     Form:{screen:Form},
     DisplayForm:{screen:DisplayForm}
   
  },
  {
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
