// Home.js
import React from "react";
import { AppLayout } from "./Layouts";
import Posts from "../components/Posts/Posts";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const postData = [
    {
      id: "1",
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1714409117568-1c6f3aa3bc20?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reposted: true,
      avatar:
        "https://plus.unsplash.com/premium_photo-1694618623649-51733e6001fc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      name: "John Doe",
      reposted: false,
      avatar:
        "https://images.unsplash.com/photo-1714383613168-5dd87a20a660?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1714409117568-1c6f3aa3bc20?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      reposted: false,
      avatar:
        "https://images.unsplash.com/photo-1714579325129-f3aa2b42699f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <AppLayout>
      <FlatList
        data={postData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Posts
            name={item.name}
            description="In this view, later on texts will come from api What i want is when the text is too long, it should display and a see more button How can we do so??But this is only if the text is too long"
            reposted={item.reposted}
            image={item.image}
            avatar={item.avatar}
            onPress={() => {
              navigation.navigate("PostDetail");
            }}
          />
        )}
      />
    </AppLayout>
  );
};

export default Home;
