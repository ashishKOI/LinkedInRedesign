import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";

const Comment = () => {
  const { colors } = useTheme();
  const [comment, setComment] = useState("");
  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handlePostComment = () => {
    console.log("Posting comment:", comment);
    setComment("");
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.white,
      zIndex: 1000,
      elevation: 10,
    },
    textInput: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1694618623649-51733e6001fc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{
            height: 30,
            width: 30,
            borderRadius: 50,
          }}
        />
        <TextInput
          placeholder="Leave your thoughts here"
          value={comment}
          style={styles.textInput}
          onChangeText={handleCommentChange}
          mode="outlined"
          backgroundColor="#fff"
        />
      </View>
      <TouchableOpacity
        onPress={handlePostComment}
        style={{ alignItems: "center" }}
      >
        <Text
          style={{ color: colors.primary, fontSize: 15, fontWeight: "500" }}
        >
          Post
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Comment;
