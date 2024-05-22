import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import SearchHeader from "./SearchHeader";
import InputText from "../../components/Inputs/TextInput";

const JobLocation = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    body: {
      paddingHorizontal: 16,
      marginTop: 15,
    },
  });
  return (
    <View style={styles.container}>
      <SearchHeader title="Job location" />
      <View style={styles.body}>
        <InputText
          placeholder="Enter suburb, city or region"
          label="Enter job title"
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 13,
            fontWeight: "500",
            color: colors.primaryText,
          }}
        >
          Recent
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "500", color: "#666666" }}>
            No recent searches
          </Text>
        </View>
      </View>
    </View>
  );
};

export default JobLocation;
