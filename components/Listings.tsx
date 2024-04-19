import {
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import React from "react";
import { ListingType } from "@/types/listingType";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  listings: any[]
};

export default function Listings({ listings }: Props) {
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <>
      <TouchableOpacity>
        <View style={styles.iteam}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
          <View>
            <Ionicons name="bookmark" size={20} style={styles.bookmark}/>
          </View>
          
        </View>
      </TouchableOpacity>
    </>
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


const styles = StyleSheet.create({
  iteam: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: 220
  },
  image: {
    width: "100%", 
    height: 200,
    borderRadius: 10,
    marginBottom: 30
  },
  bookmark: {
    position: 'absolute',
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white
  }
})