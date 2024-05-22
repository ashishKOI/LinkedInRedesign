import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Accordian = ({ label, body, expandedLabel }) => {
  const [expanded, setExpanded] = useState(false);
  const handelOnpress = () => {
    setExpanded(!expanded);
  };
  return (
    <View style={{ marginTop: 20 }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        activeOpacity={0.8}
        onPress={handelOnpress}
      >
        <Text style={{ fontWeight: "500", fontSize: 14 }}>
          {expanded ? expandedLabel : label}
        </Text>
        <Icon name={expanded ? "chevron-down" : "chevron-right"} size={20} />
      </TouchableOpacity>
      {expanded && body}
    </View>
  );
};

export default Accordian;

const styles = StyleSheet.create({});
