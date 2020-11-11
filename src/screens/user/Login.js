import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

import Config from '../../config/index';
import Utils from '../../utils/index';
import Module from '../../module/index';

import {useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/auth';

const LoginScreen = (props) => {
  const [email, setEmail] = useState(Config.String.EMAIL_ID);
  const [password, setPassword] = useState(Config.String.PASSWORD);

  const dispatch = useDispatch();

  useEffect(() => {
    _getUSerData();
  }, []);

  _getUSerData = async () => {
    const isUserLogin = await Utils.MethodUtils.Storage.getData(
      Config.String.IS_LOGIN,
    );

    console.log('isUserLogin == > ' + isUserLogin);

    dispatch(authActions.setUserSesson(isUserLogin));
  };

  const loginHandler = async () => {
    if (!Utils.MethodUtils.emailValidation(email)) {
      return;
    }

    if (!Utils.MethodUtils.passwordValidation(password)) {
      return;
    }

    dispatch(authActions.login(email, password)).then((data) => {
      props.navigation.navigate('Dashboard');
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGIN</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={email}
          placeholder="Email"
          keyboardType={'email-address'}
          onChangeText={(email) => setEmail(email.trim())}
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          value={password}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Config.Theme.COLOR_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: Config.Theme.LARSSEIT,
    fontSize: 30,
    color: Config.Theme.COLOR_ACCENT,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
    fontFamily: Config.Theme.LARSSEIT,
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Config.Theme.COLOR_ACCENT,
    fontFamily: Config.Theme.LARSSEIT,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default LoginScreen;
