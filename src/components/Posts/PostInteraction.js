import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Antdesign from "@expo/vector-icons/AntDesign";
import Material from "@expo/vector-icons/MaterialCommunityIcons";

const PostInteraction = ({ number }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    iconContainer: {
      height: 22,
      width: 22,
      borderRadius: 50,
    },
  });
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          {/*Like*/}
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: colors.primary,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Antdesign name="like2" color={colors.white} size={13} />
          </View>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: colors.love,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: -3,
              },
            ]}
          >
            <Antdesign name="hearto" color={colors.white} size={13} />
          </View>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: colors.bulb,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: -3,
              },
            ]}
          >
            <Material
              name="lightbulb-on-outline"
              color={colors.white}
              size={16}
            />
          </View>
        </View>
        <Text style={{ color: "#4e4e4e", fontSize: 12, fontWeight: "500" }}>
          {number}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: "#4e4e4e",
          }}
        >
          {number} comments
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: "#4e4e4e",
          }}
        >
          {number} reposts
        </Text>
      </View>
    </View>
  );
};

export default PostInteraction;
