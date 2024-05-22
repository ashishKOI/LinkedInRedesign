import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider, useTheme } from "react-native-paper";
import Jobs from "../../../Images/Jobs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icons from "../../../Images/Icons";
import DetailFooter from "./DetailFooter";

const JobDetail = () => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    section: {
      padding: 14,
    },
    jobTitle: {
      color: colors.primaryText,
      fontSize: 20,
      fontWeight: "700",
      marginTop: 5,
    },
    jobLocation: {
      color: "#666666",
      fontSize: 14,
      fontWeight: "500",
    },
    premiumCard: {
      backgroundColor: "#D9D9D9",
      borderColor: colors.warning,
      width: "full",
      height: 80,
      padding: 8,
      borderRadius: 5,
      borderWidth: 1,
      gap: 5,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={[styles.section]}>
          <Image source={Jobs.Job1} style={{ height: 85, width: 85 }} />
          <Text style={styles.jobTitle}>Social Media Manager</Text>
          <Text style={styles.jobLocation}>Sydney, Contemporary</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "#666666" }}>
              Posted 5 days ago .{" "}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "#666666" }}>
              Promoted .{" "}
            </Text>
            <Image source={Icons.linkedin} />
            <Text style={{ fontSize: 12, fontWeight: "400", color: "#666666" }}>
              {" "}
              Easy Apply{" "}
            </Text>
          </View>
        </View>

        <Divider />

        {/* Employee and skill section */}
        <View style={[styles.section, { gap: 10 }]}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={Icons.people} />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: colors.primaryText,
              }}
            >
              1-10 Employees
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              paddingRight: 5,
            }}
          >
            <Image source={Icons.bullet} />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: colors.primaryText,
                paddingRight: 15,
              }}
            >
              Skills: Marketing Campaigns, Marketing Strategy, +8 more skills.
            </Text>
          </View>
          <View style={styles.premiumCard}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <View
                style={{
                  backgroundColor: colors.warning,
                  borderRadius: 4,
                  height: 20,
                  width: 20,
                }}
              ></View>
              <Text
                style={{
                  color: colors.warning,
                  fontSize: 13,
                  fontWeight: "500",
                }}
              >
                LinkedIn Premium Banner
              </Text>
            </View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: colors.primaryText,
              }}
            >
              See how you compare to over 100 other applicants. Try Premium for
              A$0
            </Text>
          </View>
        </View>

        <Divider />
        {/* HIring team section */}
        <View style={[styles.section]}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: colors.primaryText,
            }}
          >
            Meet the hiring team
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1714579325129-f3aa2b42699f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={{ height: 55, width: 55, borderRadius: 50 }}
              />
              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "600",
                      color: colors.primaryText,
                    }}
                  >
                    Abrahm John
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "400",
                      marginTop: 3,
                      color: colors.primaryText,
                    }}
                  >
                    {" "}
                    . 2nd
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "400",
                    color: colors.primaryTExt,
                  }}
                >
                  UI/UX Design | Visual Design,
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "400",
                    color: colors.primaryTExt,
                  }}
                >
                  Prototype, User REsearch | Help e-c...
                </Text>
              </View>
            </View>
            <View>
              <Image source={Icons.message} />
            </View>
          </View>
        </View>

        <Divider />

        {/* About job */}
        <View style={[styles.section, { gap: 8 }]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: colors.primaryText,
            }}
          >
            About this job
          </Text>
          <View style={{ gap: 5 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "600",
                color: colors.primaryText,
              }}
            >
              Social Media Manager
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: colors.primaryText,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              {"\n\n"}Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>
      </ScrollView>
      <DetailFooter />
    </View>
  );
};

export default JobDetail;
