import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Job, Network, Notification, Post } from "../screens";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "react-native-paper";
const Tabs = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 60,
    paddingBottom: 10,
  },
  tabBarLabelStyle: {
    fontSize: 11,
    fontWeight: "500",
  },
};

const BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name="DrawerHome"
        component={Home}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="Network"
        component={Network}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people" size={size} color={color} />
          ),
          tabBarLabel: "My Network",
        }}
      />
      <Tabs.Screen
        name="Post"
        component={Post}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Post",
        }}
      />
      <Tabs.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" size={size} color={color} />
          ),
          tabBarLabel: "Notification",
        }}
      />
      <Tabs.Screen
        name="Jobs"
        component={Job}
        options={{
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="briefcase"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Jobs",
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
