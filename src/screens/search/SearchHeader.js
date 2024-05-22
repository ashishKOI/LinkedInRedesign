import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/Feather";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SearchHeader = ({ clear, title, buttonLabel }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 40,
      justifyContent: "space-between",
      marginBottom: 8,
    },
  });
  return (
    <View style={styles.container}>
      <Icon
        name="x"
        size={24}
        color="#4e4e4e"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Text
        style={{ fontSize: 16, fontWeight: "600", color: colors.primaryText }}
      >
        {title}
      </Text>
      <TouchableOpacity>
        <Text
          style={{ color: colors.primary, fontSize: 16, fontWeight: "500" }}
        >
          {buttonLabel ?? ""}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;
