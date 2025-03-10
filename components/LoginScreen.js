import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function LoginScreen() {

  // declare the variables
  const [login, onChangeLogin] = useState(''); 
  const [password, onChangePassword] = useState(''); 

  const [beforeLogin, setShowLogin] = useState('false'); 

  return (
    <ScrollView indicatorStyle="white" style={styles.container}
      keyboardDismissMode="on-drag">
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      
      {beforeLogin && (
        <>
          <Text style={styles.regularText}>
            Login to continue
          </Text>
          <TextInput 
            style={styles.input} 
            value={login} 
            placeholder={'Your email'}
            placeholderTextColor="#b0b0b0" 
            onChangeText={onChangeLogin} 
            keyboardType={'email-address'}
          /> 
          <TextInput 
            style={styles.input} 
            value={password} 
            placeholder={'Your password'}
            placeholderTextColor="#b0b0b0" 
            onChangeText={onChangePassword} 
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Pressable
            style={styles.button}
            onPress={() => setShowLogin(prevState => !prevState)}>
              <Text style={styles.buttonText}>Log in</Text>
          </Pressable> 
        </>
      )}

      {!beforeLogin &&
        <Text style={styles.textLogged}>You are logged in!</Text>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    paddingTop: 28,
    fontSize: 26,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 2,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: { 
    height: 30, 
    margin: 14, 
    borderWidth: 1, 
    padding: 4, 
    fontSize: 16, 
    borderColor: 'gray', 
    backgroundColor: '#EDEFEE', 
  }, 
  button: {
    padding: 12,
    marginVertical: 18,
    margin: 40,
    backgroundColor: '#EE9972',
    borderColor: 'navy',
    borderWidth: 2,
    borderRadius: 24
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 24,
  },
  textLogged: {
    paddingTop: 50,
    color: 'white',
    textAlign: 'center',
    fontSize: 28,
  },
});