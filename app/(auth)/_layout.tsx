import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='login'
          options={
            {
              headerShown: false,
            }
          }
        />
        <Stack.Screen
          name='signup'
          options={
            {
              headerShown: false,
            }
          }
        />


      </Stack>
      <StatusBar backgroundColor={'#1616622' }></StatusBar>
    </>

  )
}

export default AuthLayout