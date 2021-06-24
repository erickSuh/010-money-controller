import React from 'react';
import {Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import profitsImage from '../assets/profits.png';
import smartphoneImage from '../assets/smartphone.png';

import {Dashboard} from '../pages/Dashboard';
import {AddNewPost} from '../pages/AddNewPost';

import colors from '../styles/colors';

const AppTab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
          shadowColor: colors.gray,
          shadowOffset: {width: 0, height: -1},
          shadowOpacity: 0.8,
        },
      }}>
      <AppTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({size}) => (
            <Image source={profitsImage} style={{width: size, height: size}} />
          ),
        }}
      />
      <AppTab.Screen
        name="New Post"
        component={AddNewPost}
        options={{
          tabBarIcon: ({size}) => (
            <Image
              source={smartphoneImage}
              style={{width: size, height: size}}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
