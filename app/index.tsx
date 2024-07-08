import React, { useEffect } from 'react';
import { View, Image, ScrollView, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import * as SplashScreen from 'expo-splash-screen';
import CustomText from '@/components/CustomText';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { styles } from './styles/styles';


const LandingPage = () => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image
          source={images.logo}
          resizeMode='contain'
          style={styles.image}
        />
        <CustomText style={styles.text}>
          Ink Your Thoughts, Ignite Your Story
        </CustomText>
        <Button
          title="Get Started"
          onPress={() => {
            console.log('Get Started button pressed');
            router.push('/login');
          }}
          textStyle={styles.text}
        />
      </View>
    </ScrollView>
    <StatusBar backgroundColor='#161622' />
  </SafeAreaView>
);

const App: React.FC = () => {
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepare();
  }, []);

  return (
    <LandingPage />
  );
};

export default App;
