import {
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React from "react";
import { ListingType } from "@/types/listingType";

type Props = {
  listings: any[]
};

export default function Listings({ listings }: Props) {
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 200, height: 200 }}
          />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = (item: ListingType, index: number) => index.toString();

  return (
    <View>
      <FlatList
        data={listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
