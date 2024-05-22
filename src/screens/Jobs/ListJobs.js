import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import RightArrowButton from "../../components/Buttons/RightArrowButton";
import { Divider, useTheme } from "react-native-paper";
import Icon from "@expo/vector-icons//MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ListJobs = ({ image, jobTitle, company }) => {
  const navigation = useNavigation();
  const MAX_CHARS = 27;

  const truncateText = (text) => {
    if (text.length > MAX_CHARS) {
      return text.substring(0, MAX_CHARS) + "...";
    }
    return text;
  };

  const { colors } = useTheme();
  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    jobTitle: {
      color: colors.primaryText,
      fontSize: 17,
      fontWeight: "700",
    },
    jobLocation: {
      color: colors.primaryText,
      fontSize: 12,
      fontWeight: "400",
    },
    footerText: {
      color: colors.dark,
    },
  });
  return (
    <View>
      <View style={{ padding: 12 }}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image
              source={image}
              style={{ height: 55, width: 55, borderRadius: 3 }}
            />
            <View>
              <Text
                style={styles.jobTitle}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {truncateText(jobTitle)}
              </Text>
              <Text style={styles.jobLocation}>{company}</Text>
            </View>
          </View>
          <RightArrowButton
            onPress={() => {
              navigation.navigate("JobDetail");
            }}
          />
        </View>

        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          <Text
            style={[styles.footerText, { fontSize: 12, fontWeight: "400" }]}
          >
            Posted 5 days ago
          </Text>
          <Text
            style={[styles.footerText, { fontSize: 12, fontWeight: "400" }]}
          >
            Promoted
          </Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Icon name="linkedin" size={18} color={colors.primary} />
            <Text
              style={[styles.footerText, { fontSize: 12, fontWeight: "400" }]}
            >
              Easy apply
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[styles.footerText, { fontSize: 13, fontWeight: "600" }]}
          >
            Sydney, New South Whales, Australia
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default ListJobs;
