import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import { Divider, useTheme } from "react-native-paper";
import InputText from "../../components/Inputs/TextInput";
import Accordian from "../../components/Accordian";
import RadioButton from "../../components/Buttons/RadioButtons";
import ScrollablePicker from "../../components/Picker";
import ContentButton from "../../components/Buttons/ContentButton";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    inputForm: {
      paddingHorizontal: 16,
      marginVertical: 10,
    },
    footer: {
      height: 70,
      backgroundColor: colors.white,
      paddingHorizontal: 16,
      paddingTop: 10,
      paddingBottom: 20,
      zIndex: 1000,
      elevation: 10,
    },
  });

  const options = [
    { value: "Anually", label: "Anually" },
    { value: "Monthly", label: "Monthly" },
    { value: "Hourly", label: "Hourly" },
  ];

  const options2 = [
    { value: "All_types", label: "All types" },
    { value: "Full time", label: "Full time" },
    { value: "Part time", label: "Part time" },
  ];

  const options3 = [
    { value: "Contract/Temporary", label: "Contract/Temporary" },
    { value: "Casual/Vacation", label: "Casual/Vacation" },
  ];

  const data = [
    { value: "A$0", label: "A$0" },
    { value: "A$100", label: "A$100" },
    { value: "A$200", label: "A$200" },
    { value: "A$300", label: "A$300" },
    { value: "A$400", label: "A$400" },
    { value: "A$500", label: "A$500" },
  ];

  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    // Perform any additional logic with the selected value
  };

  const handleSelect = (value) => {
    console.log(`Selected value: ${value}`);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <SearchHeader title="Search Job" />
        <View style={styles.inputForm}>
          <InputText
            label="Enter job title"
            placeholder="Enter job title you prefer"
            onFocus={() => {
              navigation.navigate("JobTitle");
            }}
          />
          <InputText
            placeholder="Any specific classification ?"
            onFocus={() => {
              navigation.navigate("Classification");
            }}
          />
          <View style={{ marginTop: 10 }}>
            <InputText
              label="Job location"
              placeholder="Enter job title you prefer"
              onFocus={() => {
                navigation.navigate("Location");
              }}
            />
          </View>
        </View>
        <Divider />
        <View>
          <View
            style={{ paddingHorizontal: 16, marginTop: 16, marginBottom: 15 }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              More options
            </Text>
            <Accordian
              label="A$0 to $350k + Anually"
              expandedLabel="Salary"
              body={
                <View>
                  <View style={{ marginTop: 20, flexDirection: "row" }}>
                    <RadioButton
                      options={options}
                      onSelect={handleSelect}
                      defaultValue="Anually"
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 30,
                    }}
                  >
                    <ScrollablePicker
                      data={data}
                      onValueChange={handleValueChange}
                      selectedValue={selectedValue}
                    />
                    <Text>to</Text>
                    <ScrollablePicker
                      data={data}
                      onValueChange={handleValueChange}
                      selectedValue={selectedValue}
                    />
                  </View>
                </View>
              }
            />
          </View>

          <Divider />
          <View style={{ paddingHorizontal: 16, marginBottom: 15 }}>
            <Accordian
              label="All work types"
              expandedLabel="Work types"
              body={
                <View>
                  <View style={{ marginTop: 20, flexDirection: "row" }}>
                    <RadioButton
                      options={options2}
                      onSelect={handleSelect}
                      // defaultValue="All_types"
                    />
                  </View>
                  <View style={{ marginTop: 8, flexDirection: "row" }}>
                    <RadioButton options={options3} onSelect={handleSelect} />
                  </View>
                </View>
              }
            />
          </View>
          <Divider />
        </View>
      </View>
      <View style={styles.footer}>
        <ContentButton
          label="Search"
          onPress={() => {
            navigation.navigate("SearchResult");
          }}
        />
      </View>
    </View>
  );
};

export default Search;
