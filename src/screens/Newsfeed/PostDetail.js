import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PostHeader from "../../components/Posts/PostHeader";
import { Divider, useTheme } from "react-native-paper";
import PostFooter from "../../components/Posts/PostFooter";
import Comment from "../../components/Comment";

const PostDetail = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      height: "100%",
    },
    description: {
      fontSize: 12.5,
      color: colors.primaryText,
      fontWeight: "400",
      overflow: "hidden",
      lineHeight: 16,
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <Divider />

        <PostHeader
          name="John Doe"
          avatar="https://images.unsplash.com/photo-1714579325129-f3aa2b42699f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <View style={{ paddingHorizontal: 16, marginTop: 5 }}>
          <Text style={styles.description}>
            UI/UX Designers, here are 19 sites to find free illustrations for
            your next UI design project. There are countless websites you can
            explore today. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
            <Text
              style={{ fontWeight: "500", fontSize: 14, color: colors.primary }}
            >
              Here is the link you would like to go through
            </Text>{" "}
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1714409117568-1c6f3aa3bc20?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{
            marginTop: 10,
            width: "100%",
            height: 390,
          }}
        />

        <PostFooter />
      </ScrollView>
      <Comment />
    </View>
  );
};

export default PostDetail;
