import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Colors from "@/constants/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onCagtegoryChange: (category: string) => void;
}

export default function CategoryButtons({onCagtegoryChange}: Props) {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];

    setActiveIndex(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    });

    onCagtegoryChange(destinationCategories[index].title);
  };
  return (
    <View>
      <Text style={styles.title}>Categories</Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => itemRef.current[index] = el}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex == index
                ? styles.categoryBtnActive
                : styles.categoriesBtn
            }
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={activeIndex == index ? Colors.white : Colors.black}
            />
            <Text
              style={
                activeIndex == index
                  ? styles.categoryActiveTxt
                  : styles.categoryBtnTxt
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },
  categoriesBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryBtnTxt: {
    marginLeft: 5,
    color: Colors.black,
  },
  categoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoryActiveTxt: {
    marginLeft: 5,
    color: Colors.white,
  },
});
