import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Tabs, Redirect, Stack } from 'expo-router';
import { icons } from '../../constants';
import { StatusBar } from 'expo-status-bar';


interface TabIconprops {
  icon: ImageSourcePropType
  color: string
  name: string
  focused: boolean

}

const TabIcon: React.FC<TabIconprops> = ({ icon, color, name, focused }) => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='Home'
          options={
            {
              headerShown: false,
            }
          }
        />
        <Stack.Screen
          name='BookMark'
          options={
            {
              headerShown: false,
            }
          }
        />
        <Stack.Screen
          name='Create'
          options={
            {
              headerShown: false,
            }
          }
        />


      </Stack>
      <StatusBar backgroundColor={'#1616622'}></StatusBar>
    </>

  )
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'FFFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,

          }
        }



        }


      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="bookmark"
                focused={focused}
              />
            ),
          }}
        />

        {<Tabs.Screen
          name="create"
          options={{
            title: 'create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="create"
                focused={focused}
              />
            ),
          }}
        />}

        {<Tabs.Screen
          name="profile"
          options={{
            title: 'profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="profile"
                focused={focused}
              />
            ),
          }}
        />}
      </Tabs>
    </>
  );
};

export default TabsLayout;
