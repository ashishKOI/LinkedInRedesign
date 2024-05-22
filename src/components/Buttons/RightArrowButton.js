import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";

const RightArrowButton = ({ ...props }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.secondary,
      height: 32,
      width: 32,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 3,
    },
  });
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <Icon name="arrow-right" size={20} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default RightArrowButton;
