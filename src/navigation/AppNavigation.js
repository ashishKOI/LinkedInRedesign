import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./DrawerNavigation";
import {
  Classification,
  JobDetail,
  JobLocation,
  JobTitle,
  PostDetail,
  Search,
  SearchResult,
} from "../screens";
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main"
      >
        <Stack.Screen component={DrawerNavigation} name="Main" />
        <Stack.Screen
          component={PostDetail}
          name="PostDetail"
          options={{
            headerShown: true,
            title: "",
            headerRight: () => (
              <MaterialCommunityIcon
                name="dots-horizontal"
                size={25}
                color={colors.textSecondary}
              />
            ),
          }}
        />
        <Stack.Screen
          component={JobDetail}
          name="JobDetail"
          options={{
            headerShown: true,
            title: "",
            headerRight: () => (
              <MaterialCommunityIcon
                name="dots-horizontal"
                size={25}
                color={colors.textSecondary}
              />
            ),
          }}
        />
        <Stack.Screen
          component={Search}
          name="Search"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={JobTitle}
          name="JobTitle"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Classification}
          name="Classification"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={JobLocation}
          name="Location"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={SearchResult}
          name="SearchResult"
          options={{
            headerShown: true,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: "600",
            },
            headerRight: () => <MaterialCommunityIcon name="filter-variant" size={24}/>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
