import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

interface NewsItem {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
}

const mockNewsItems: NewsItem[] = [
  {
    id: "1",
    category: "News",
    title: "Sherwood: Sheff Utd clash shows players care",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    category: "News",
    title: "This week in the Premier League",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    category: "Transfer",
    title: "Philip Diaz double boosts Villa's hopes for top four",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    category: "Statistics",
    title: "How far is Hojland from the record scoring streak?",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    category: "Feature",
    title: "Premier League weekend review: What we learned",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function NewsList() {
  // This function will be used to handle presses on news items.
  // For now, it just logs to the console.
  const onNewsItemPress = (newsItemId: string) => {
    console.log(`News item with id ${newsItemId} pressed`);
  };

  // This function renders each item using a TouchableOpacity for press handling.
  const renderItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onNewsItemPress(item.id)}
    >
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockNewsItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        // horizontal
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: Dimensions.get("window").width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: wp("96%"),
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("1%"),
    // padding: wp("2%"),
    gap: wp("2%"),
    // backgroundColor: COLORS.darkGrey,
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: wp("30%"),
    height: hp("10%"),
    borderBottomWidth: hp("0.25%"),
    borderBottomColor: COLORS.secondary,
  },
  textContainer: {
    // backgroundColor: "blue",
    flex: 1,
    flexDirection: "column",
    // marginLeft: wp("2%"),
  },
  category: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    color: COLORS.white,
  },
  title: {
    fontSize: hp("1.8%"),
    color: COLORS.white,
    textAlign: "justify",
  },
});
