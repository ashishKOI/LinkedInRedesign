import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Divider, useTheme } from "react-native-paper";
import BottomTabs from "./BottomTabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Connection, Events, Groups } from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PremiumCard from "../components/PrmiumCard";
import Icons from "../../Images/Icons";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView forceInset={{ top: "always", horizontal: "never" }}>
            <View
              style={{
                height: 160,
                width: "100%",
                marginTop: 15,
                marginLeft: 10,
                gap: 10,
                paddingRight: 20,
              }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: 50,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: colors.black,
                  }}
                >
                  John Doe
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: colors.dark,
                  }}
                >
                  UI/UX Designer at Webo Master
                </Text>
              </View>
              <Divider />
            </View>

            <DrawerItemList {...props} />
          </ScrollView>
          <View
            style={{ flex: 1, marginRight: 10, marginLeft: 10, marginTop: 30 }}
          >
            <PremiumCard />
            <TouchableOpacity
              style={{
                marginTop: 25,
                flexDirection: "row",
                gap: 13,
                alignItems: "center",
              }}
            >
              <Image
                source={Icons.gear}
                style={{ height: 24, width: 24, marginLeft: 8 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  color: colors.black,
                }}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.white,
          width: 240,
          height: 844,
        },
        headerTintColor: colors.black,
        drawerLabelStyle: {
          color: colors.black,
          fontSize: 15,
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{
          drawerLabel: "Home",
          title: "",
          headerShadowVisible: false,
          headerShown: false,
          drawerActiveTintColor: colors.primary,
          drawerIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Groups"
        component={Groups}
        options={{
          drawerLabel: "Groups",
          title: "Groups",
          drawerActiveTintColor: colors.primary,
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Events"
        component={Events}
        options={{
          drawerLabel: "Events",
          drawerActiveTintColor: colors.primary,
          title: "Events",
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Connection"
        component={Connection}
        options={{
          drawerLabel: "Connections",
          title: "Connections",
          drawerActiveTintColor: colors.primary,
          headerShadowVisible: false,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="people" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
