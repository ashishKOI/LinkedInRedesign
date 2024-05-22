import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Jobs from "../../../Images/Jobs";
import ListJobs from "../Jobs/ListJobs";

const SearchResult = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
  });
  const jobsData = [
    {
      id: 1,
      image: Jobs.Job1,
      company: "Sydney Contemporary",
      jobTitle: "Social Media Manager",
    },
    {
      id: 2,
      image: Jobs.Job2,
      company: "Hamlet and Co.",
      jobTitle: "Social Media and Content Manager",
    },
    {
      id: 3,
      image: Jobs.Job3,
      company: "Three Sixty Digital",
      jobTitle: "Reels and Social Media Manager",
    },
    {
      id: 4,
      image: Jobs.Job4,
      company: "Ripple Opportunities",
      jobTitle: "Product Marketing Manager",
    },
    {
      id: 5,
      image: Jobs.Job5,
      company: "KTM Coders",
      jobTitle: "Full Stack Developer",
    },
    {
      id: 6,
      image: Jobs.Job5,
      company: "Dovetail",
      jobTitle: "Marketing Manager",
    },
    {
      id: 7,
      image: Jobs.Job5,
      company: "Dovetail",
      jobTitle: "Marketing Manager",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={jobsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListJobs
            image={item.image}
            jobTitle={item.jobTitle}
            company={item.company}
          />
        )}
      />
    </View>
  );
};

export default SearchResult;
