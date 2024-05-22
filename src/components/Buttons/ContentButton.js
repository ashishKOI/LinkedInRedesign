import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, useTheme } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ContentButton = ({ icon, label, ...props }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      height: 35,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 35,
      gap: 10,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...props}>
      {icon && <Icon name={icon} color={colors.white} size={20} />}
      <Text style={{ color: colors.white, fontSize: 13, fontWeight: "500" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ContentButton;
