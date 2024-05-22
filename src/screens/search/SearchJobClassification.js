import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Divider, useTheme } from "react-native-paper";

const RenderClassificationList = ({ name, number, options }) => {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleOnPress = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 16,
          paddingRight: 10,
          marginBottom: 10,
          marginTop: 15,
        }}
      >
        <Text
          style={{ fontSize: 14, fontWeight: "500", color: colors.primaryText }}
        >
          {name}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View
            style={{
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 10,
              borderRadius: 5,
              width: 60,
              paddingVertical: 5,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: colors.primaryText,
              }}
            >
              {number}
            </Text>
          </View>
          <Icon
            name={expanded ? "chevron-down" : "chevron-right"}
            size={24}
            color={colors.primaryText}
            onPress={handleOnPress}
          />
        </View>
      </View>
      <Divider />
      {options && expanded && (
        <View>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id.toString()} // Ensure key is a string
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: 30,
                    paddingRight: 10,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: colors.primaryText,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#D9D9D9",
                        paddingHorizontal: 10,
                        borderRadius: 5,
                        width: 60,
                        paddingVertical: 5,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "600",
                          color: colors.primaryText,
                        }}
                      >
                        {item.number}
                      </Text>
                    </View>
                    <Icon
                      name="chevron-right"
                      size={24}
                      color={colors.primaryText}
                    />
                  </View>
                </View>
                <Divider />
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const Classification = () => {
  const childData = [
    {
      id: 1,
      name: "Data collection",
      number: 344,
    },
    {
      id: 2,
      name: "Cashier",
      number: 400,
    },
    {
      id: 3,
      name: "Accountant",
      number: 1000,
    },
    {
      id: 4,
      name: "Receptionist",
      number: 563,
    },
  ];
  const parentData = [
    {
      id: 1,
      name: "Accounting",
      number: 1456,
    },
    {
      id: 2,
      name: "Administration & office support",
      number: 2567,
    },
    {
      id: 3,
      name: "Advertising, Arts & Media",
      number: 3854,
    },
    {
      id: 4,
      name: "Banking & Financial Services",
      number: 3237,
      options: childData,
    },
  ];

  return (
    <View>
      <SearchHeader title="Classification" buttonLabel="Clear All" />
      <View style={{ marginTop: 15 }}>
        <FlatList
          data={parentData}
          keyExtractor={(item) => item.id.toString()} // Ensure key is a string
          renderItem={({ item }) => (
            <RenderClassificationList
              name={item.name}
              number={item.number}
              options={item.options}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Classification;

const styles = StyleSheet.create({});
