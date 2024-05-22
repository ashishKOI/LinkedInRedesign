import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import PostInteraction from "./PostInteraction";
import { Divider } from "react-native-paper";
import Antdesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

const PostFooter = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
    >
      <PostInteraction number={12345} />
      <Divider />
      <View
        style={{
          paddingHorizontal: 33,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={{ alignItems: "center", gap: 2 }}>
          <Antdesign name="like2" size={20} color="#4e4e4e" />
          <Text style={{ fontSize: 11, fontWeight: "500" }}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", gap: 2 }}>
          <FontAwesome name="comment-alt" size={20} color="#4e4e4e" />
          <Text style={{ fontSize: 11, fontWeight: "500" }}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", gap: 2 }}>
          <Feather name="repeat" size={20} color="#4e4e4e" />
          <Text style={{ fontSize: 11, fontWeight: "500" }}>Repost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center", gap: 2 }}>
          <Feather name="send" size={20} color="#4e4e4e" />
          <Text style={{ fontSize: 11, fontWeight: "500" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({});
