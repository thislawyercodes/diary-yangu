import React, { useState } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { styles } from '../styles/styles';
import images from '@/constants/images';
import CustomFormField from '@/components/CustomFormField';
import { signup } from '@/lib/apiService';

const SignUp = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepeatPassword] = useState('');

  const handleUsernameChange = (text: string) => {
    setEmail(text); 
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text); 
  };

  const handleRepeatPasswordChange = (text: string) => {
    setRepeatPassword(text); 
  };

  const handleSignUpPress = async () => {
    try {
      const response = await signup(first_name, last_name, email, password);
      console.log('Signup successful:', response);
      router.push('/login');
    } catch (error) {
      console.error('Signup error:', error instanceof Error ? error.message : 'Unknown error');
    }
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
          <Text style={styles.loginHeader}>Register here to create a DiaryYangu Account</Text>

          <CustomFormField
            title="First Name"
            placeholder="Enter your First Name"
            value={first_name}
            handleChangeText={setFirstName}
          />
          <CustomFormField
            title="Last Name"
            placeholder="Enter your last name"
            value={last_name}
            handleChangeText={setLastName}
          />
          <CustomFormField
            title="Email"
            placeholder="Enter your Email"
            value={email}
            handleChangeText={handleUsernameChange}
            keyboardType="email-address"
          />
          <CustomFormField
            title="Password"
            placeholder="Enter your Password"
            value={password}
            handleChangeText={handlePasswordChange}
          />
          <CustomFormField
            title="Repeat Password"
            placeholder="Repeat your password"
            value={repeat_password}
            handleChangeText={handleRepeatPasswordChange}
          />

          <Button
            title="Register"
            onPress={handleSignUpPress} 
            textStyle={styles.buttonText}
          />
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.registerHeader}>Already have an Account? Login here</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
