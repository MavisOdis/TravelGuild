import {
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingType } from "@/types/listingType";
import Colors from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  listings: any[];
  category: string;
};

export default function Listings({ listings, category }: Props) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('update listing')

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200)
  }, [category])

  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.iteam}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.bookmark}>
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.white}
              />
            </View>

            <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>

            <View style={{flexDirection: "row", justifyContent:"space-between"}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <FontAwesome5 name="map-marker-alt" size={18} color={Colors.primaryColor}/>
                <Text style={styles.itemLocation}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceTxt}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  const keyExtractor = (item: ListingType, index: number) => index.toString();

  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
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
    width: 220,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocation: {
    fontSize: 12,
    marginLeft: 5
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primaryColor
  },
});
