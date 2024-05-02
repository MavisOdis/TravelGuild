import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";
import Listings from "@/components/Listings";
import ListingData from "../../data/destinations.json";
import GroupListings from "@/components/GroupListings";
import groupData from "../../data/groups.json";

export default function Page() {
  const headrHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");

  const onCatChanged = (category: string) => {
    // console.log("category: ", category);
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headrHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Heading text */}
          <Text style={styles.headingText}>Explore The Beautiful World!</Text>

          {/* Searchbar section */}
          <View style={styles.searchBarSection}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 5, color: Colors.black }}
              />
              <TextInput placeholder="search.." />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <CategoryButtons onCagtegoryChange={onCatChanged} />

          <Listings listings={ListingData} category={category} />

          <GroupListings listings={groupData} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 10,
  },
  searchBarSection: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: "center",
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    marginLeft: 20,
    borderRadius: 10,
    padding: 12,
  },
});
