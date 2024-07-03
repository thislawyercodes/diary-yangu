// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from '@/components/screens/sign_in_page';
import LandingPage from '@/components/screens/landing_page';
import {Slot,Link} from 'expo-router'
import { View,Text } from 'react-native';


const App: React.FC = () => { 
  return (
    <View>
          <Text font-Black>Potato Hinges..............</Text>
           <Link href="/Home" className="flex-1 items-center justify-center bg-white">Go back to profile</Link>
    </View>
  )
};

export default App;
