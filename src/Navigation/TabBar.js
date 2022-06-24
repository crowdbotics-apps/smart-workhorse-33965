import * as React from "react"
import { Image, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { MessagesScene, RequestLeaveScene, HomeScene } from "../UI"
import { Fonts, Colors } from "../res"
import Images from "../res/Images"

const Tab = createBottomTabNavigator()
const defaultOptions = (focussed, color, icon) => {
  return (
    <Image
      {...Images[icon]}
      style={{
        height: 20,
        width: 22,
        tintColor: color
      }}
    />
  )
}
export const TabBar = props => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.BUTTON_BG,
          height: 94,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
        labelStyle: styles.drawerText,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: Colors.GREY_COLOR
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScene}
        options={{
          tabBarIcon: ({ focussed, color }) =>
            defaultOptions(focussed, color, "home")
        }}
      />
      <Tab.Screen
        name="Time off request"
        component={RequestLeaveScene}
        options={{
          tabBarIcon: ({ focussed, color }) =>
            defaultOptions(focussed, color, "timeOff")
        }}
      />
      <Tab.Screen
        name="My Earnings"
        component={HomeScene}
        options={{
          tabBarIcon: ({ focussed, color }) =>
            defaultOptions(focussed, color, "earnings")
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScene}
        options={{
          tabBarIcon: ({ focussed, color }) =>
            defaultOptions(focussed, color, "messages")
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  drawerRow: {
    height: 50
  },
  drawerText: {
    ...Fonts.poppinsRegular(18),
    color: Colors.TEXT_COLOR,
    fontWeight: "normal"
  }
})