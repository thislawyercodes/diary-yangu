import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

interface TabIconprops{
    icon:ImageSourcePropType
    color:string
    name:string
    focused:boolean

}

const TabIcon:React.FC<TabIconprops> = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color, width: 24, height: 24 }} // Adjusted style
      />
      <Text style={{ color: focused ? color : 'gray' }}> {/* Adjust text color based on focus */}
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
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
    </Tabs>
  );
};

export default TabsLayout;
