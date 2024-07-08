import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import CustomText from '@/components/CustomText';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { styles } from '../styles/styles';
import images from '@/constants/images';
import CustomFormField from '@/components/CustomFormField';




const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setUserPassword] = useState('');


  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handleUsePassword = (text: string) => {
    setUserPassword(text);
  };

  const handleSignUpPress = () => {
    router.push('/signup'); 
};


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>   
      <View style={styles.scrollViewContent}>

      <Image
            source={images.logo}
            resizeMode='contain'
            style={styles.image}
       />
        <Text style={styles.loginHeader}>Login To Your Diary Yangu Account</Text>

        <CustomFormField
          title="Email"
          placeholder="Enter your Email"
          value={email}
          handleChangeText={handleUsernameChange}
          keyboardType="email-address"
        />
          <CustomFormField
          title="Password"
          placeholder="Enter your password"
          value={password}
          handleChangeText={handleUsePassword}
        />

        <Button
          title="Login"
          onPress={() => {
            console.log('Login button clicked');
            router.push('/signup');
          }}
          textStyle={styles.buttonText} 
        />
    <TouchableOpacity onPress={handleSignUpPress}>
    <Text style={styles.registerHeader}>Don't have an Account?Register here</Text>
    </TouchableOpacity>


      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Login;
