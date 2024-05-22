import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, useTheme } from "react-native-paper";

const PrmiumCard = ({ description }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    card: {
      height: 122,
      width: 220,
      backgroundColor: "#D9D9D9",
      borderRadius: 5,
      padding: 15,
      borderColor: colors.warning,
      borderWidth: 1,
    },
  });
  return (
    <View style={styles.card}>
      <View
        style={{
          height: 32,
          width: 32,
          borderRadius: 4,
          backgroundColor: colors.warning,
        }}
      ></View>

      <View style={{ paddingRight: 30, marginTop: 15 }}>
        <Text
          style={{ color: colors.warning, fontSize: 17, fontWeight: "500" }}
        >
          LinkedIn Premium Banner
        </Text>
      </View>
    </View>
  );
};

export default PrmiumCard;
