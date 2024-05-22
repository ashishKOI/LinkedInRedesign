import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const RadioButton = ({ options, onSelect, defaultValue, ...props }) => {
  const { colors } = useTheme();
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]?.value
  );

  const styles = StyleSheet.create({
    radioButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    radioButton: {
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 2,
      flex: 1,
      marginHorizontal: 5,
    },
    label: {
      fontSize: 14,
      color: colors.dark,
    },
  });

  const handlePress = (value) => {
    setSelectedValue(value);
    onSelect && onSelect(value);
  };

  return (
    <View style={styles.radioButtonContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => handlePress(option.value)}
          activeOpacity={0.8}
          style={[
            styles.radioButton,
            {
              backgroundColor:
                selectedValue === option.value ? colors.primary : "#D9D9D9",
            },
          ]}
          {...props}
        >
          <Text
            style={[
              styles.label,
              {
                color:
                  selectedValue === option.value ? colors.white : colors.dark,
              },
            ]}
          >
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;
