import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Divider, useTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";

const Header = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 40,
      justifyContent: "space-between",
      marginBottom: 8,
    },
    profileImage: {
      height: 40,
      width: 40,
      borderRadius: 50,
    },
    iconButtonsContainer: {
      flex: 1,
      justifyContent: "flex-end",
      flexDirection: "row",
      alignItems: "center",
    },
  });

  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Icon
            name="search"
            size={26}
            color={colors.dark}
            onPress={() => {
              navigation.navigate("Search");
            }}
          />
          <Icon name="chatbox-ellipses-outline" size={26} color={colors.dark} />
        </View>
      </View>
      <Divider />
    </>
  );
};

export default Header;
