import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { GroupType } from "@/types/groupType";
import Colors from "@/constants/Colors";

export default function GroupListings({ listings }: { listings: GroupType[] }) {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.item}>
      <Text>Top Travel Groups</Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
  },
});
