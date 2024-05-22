import { StyleSheet, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useTheme } from "react-native-paper";

const AppLayout = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Header />
      {children}
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
