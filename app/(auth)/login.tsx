import React, { useState } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomFormField from '@/components/CustomFormField';
import Button from '@/components/Button';
import { login } from '@/lib/apiService';
import { saveToken } from '@/lib/baseService';
import { router } from 'expo-router'; // Ensure correct import for router
import { styles } from '../styles/styles';
import images from '@/constants/images';

const Login = () => {
  const [email, setUsername] = useState('');
  const [password, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handleUsePassword = (text: string) => {
    setUserPassword(text);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await login(email, password);
      await saveToken(data.access);
      console.log('Login successful. Token saved:', data.token);
      Alert.alert('Success', 'Login was successful.....');
      router.push('/home');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpPress = () => {
    router.push('/signup');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.scrollViewContent}>
          <Image source={images.logo} resizeMode='contain' style={styles.image} />
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

          {loading ? (
            <ActivityIndicator size="large" color="#FFA001" />
          ) : (
            <Button
              title="Login"
              onPress={handleLogin}
              textStyle={styles.buttonText}
            />
          )}

          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.registerHeader}>Don't have an Account? Register here</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Login;
