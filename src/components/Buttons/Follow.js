import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Icon from "@expo/vector-icons/Entypo";

const Follow = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      height: 30,
      width: 70,
      backgroundColor: colors.secondary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 3,
      flexDirection: "row",
      gap: 5,
    },
    text: {
      fontSize: 12,
      color: colors.primary,
      fontWeight: "400",
    },
  });
  return (
    <View>
      <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <Icon name="plus" size={15} color={colors.primary} />
        <Text style={styles.text}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Follow;
