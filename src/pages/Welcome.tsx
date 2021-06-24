import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../components/Button';

import welcomeImage from '../assets/welcome_image.png';
import colors from '../styles/colors';

export const Welcome = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie{'\n'}
          suas finanças de{'\n'}
          forma fácil
        </Text>
        <Image
          style={styles.image}
          source={welcomeImage}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>
          Lembraremos sempre que precisar pagar suas contas e quanto você
          gastou. Para saber se você está mais próximo do seu objetivo.
        </Text>
        <Button style={styles.button} onPress={handleStart} label="Continuar" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    width: 250,
  },
  buttonIcon: {
    fontSize: 28,
    color: colors.white,
  },
});
