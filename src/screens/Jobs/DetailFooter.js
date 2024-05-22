import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContentButton from "../../components/Buttons/ContentButton";
import OutlineButton from "../../components/Buttons/OutlineButton";

const DetailFooter = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 60,
      paddingHorizontal: 15,
      paddingVertical: 5,
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
  return (
    <View style={styles.container}>
      <ContentButton icon="linkedin" label="Easy apply" />
      <OutlineButton icon="bookmark" label="Save this job" />
    </View>
  );
};

export default DetailFooter;
