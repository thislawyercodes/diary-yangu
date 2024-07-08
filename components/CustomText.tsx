import React from 'react';
import { Text, TextProps } from 'react-native';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const CustomText: React.FC<TextProps> = ({ style, ...props }) => {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return <Text style={[{ fontFamily: 'Lato_400Regular' }, style]} {...props} />;
};

export default CustomText;
