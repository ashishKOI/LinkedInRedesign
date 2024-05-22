import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Antdesign from "@expo/vector-icons/AntDesign";
import Follow from "../Buttons/Follow";

const PostHeader = ({ name, avatar }) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingTop: 10,
        flexDirection: "row",
        gap: 5,
      }}
    >
      <Image
        source={{
          uri:
            avatar ??
            "https://images.unsplash.com/photo-1714579325129-f3aa2b42699f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{ height: 55, width: 55, borderRadius: 50, marginTop: 8 }}
      />
      <View style={{ marginLeft: 5 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 1,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: colors.primaryText,
            }}
          >
            {name ?? "John doe"}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 400,
              color: colors.primaryText,
              marginTop: 3,
            }}
          >
            2nd
          </Text>
        </View>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "400",
            color: colors.primaryText,
          }}
        >
          UI/UX Design | Visual Design,
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "400",
            color: colors.primaryText,
          }}
        >
          Prototype, User Research | Help e-c...
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={{ fontSize: 11, color: colors.primaryText }}>9h</Text>
          <Antdesign name="earth" size={11} />
        </View>
      </View>
      <View style={{ marginLeft: 30 }}>
        <Follow />
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({});
