import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const InputText = ({ label, placeholder, ...props }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: "full",
      backgroundColor: colors.white,
      borderColor: "#666666",
      borderWidth: 1,
      borderRadius: 3,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    title: {
      fontSize: 14,
      fontWeight: "500",
      color: colors.primaryText,
      marginBottom: 10,
    },
  });
  return (
    <View>
      {label && <Text style={styles.title}>{label}</Text>}

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        cursorColor="black"
        onFocus={props.onFocus ? props.onFocus : null}
      />
    </View>
  );
};

export default InputText;
