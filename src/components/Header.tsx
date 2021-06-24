import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';

export const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const localStorageUserName = async () => {
      const user = await AsyncStorage.getItem('@moneyController:user');
      setUserName(user || '');
    };
    localStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
  },
  userName: {
    fontSize: 26,
    lineHeight: 30,
    color: colors.heading,
  },
});
