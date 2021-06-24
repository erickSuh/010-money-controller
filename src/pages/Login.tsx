import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../components/Button';
import {Input} from '../components/Input';

import colors from '../styles/colors';
import loginImage from '../assets/login_image.png';

export const Login = () => {
  const navigation = useNavigation();

  const [disabledButton, setDisabledButton] = useState(true);
  const [userName, setUserName] = useState('');

  const handleOnChangeName = (e: string) => {
    setDisabledButton(!e);
    setUserName(e);
  };

  const handleSubmit = async () => {
    if (!userName) {
      return Alert.alert('Precisamos saber quem é você.');
    }

    try {
      await AsyncStorage.setItem('@moneyController:user', userName);
      navigation.navigate('Dashboard');
    } catch {
      Alert.alert('Não conseguimos salvar seu nome. Poderia tentar novamente');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerLabel}>
              Precisamos{'\n'}saber quem é você
            </Text>
            <Image
              style={styles.headerImage}
              source={loginImage}
              resizeMode="contain"
            />
            <View style={styles.inputContainer}>
              <Input
                placeholder="Qual é seu nome?"
                onChangeText={handleOnChangeName}
                value={userName}
              />
            </View>
          </View>
          <Button
            style={styles.buttonContainer}
            onPress={handleSubmit}
            disabled={disabledButton}
            label="Iniciar"
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 18,
  },
  headerLabel: {
    fontSize: 24,
    color: colors.heading,
    textAlign: 'center',
  },
  headerImage: {
    width: 200,
    height: 200,
    marginTop: 36,
  },
  inputContainer: {
    width: '80%',
    marginTop: 40,
  },
  buttonContainer: {
    width: '80%',
  },
});
