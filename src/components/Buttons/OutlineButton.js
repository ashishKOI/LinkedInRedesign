import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const OutlineButton = ({ icon, label }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      height: 35,
      width: "full",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 35,
      gap: 10,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.primary,
    },
  });
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Icon name={icon} color={colors.primary} size={20} />
      <Text style={{ color: colors.primary, fontSize: 13, fontWeight: "500" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
