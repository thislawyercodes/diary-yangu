import {Slot,Stack,SplashScreen} from 'expo-router'
import { Text, View } from 'react-native'
import React, { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const RootLayoout = () => {
  return (
    <Stack>
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="filter/[query]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
    </Stack>
  )
}

export default RootLayoout


