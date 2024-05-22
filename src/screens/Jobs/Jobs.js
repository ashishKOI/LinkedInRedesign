import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import ListJobs from "./ListJobs";
import Jobs from "../../../Images/Jobs";
import { FlatList } from "react-native";
import { AppLayout } from "../Layouts";

const Job = () => {
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
    <AppLayout>
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
    </AppLayout>
  );
};

export default Job;

const styles = StyleSheet.create({});
