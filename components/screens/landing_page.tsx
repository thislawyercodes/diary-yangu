import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from 'expo-router';

const LandingPage= () => {
const navigation=useNavigation();
  const handleSignIn:any= () => {
    console.log('Sign Up button pressed');
    ;
  };

  const handleSignUp = () => {
    console.log('Sign Up button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Diary Yangu</Text>
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default LandingPage;
