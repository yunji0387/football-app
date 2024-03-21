import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface StatItem {
  id: string;
  type: string;
  value: number;
  imageUrl: string;
  name: string;
}

const mockStatItems: StatItem[] = [
  {
    id: "1",
    type: "Goals",
    value: 23,
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player1",
    name: "Kane",
  },
  {
    id: "2",
    type: "Assists",
    value: 23,
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player2",
    name: "Son",
  },
  {
    id: "3",
    type: "Club Goals",
    value: 78,
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Club1",
    name: "MU",
  },
  {
    id: "4",
    type: "Clean Sheets",
    value: 15,
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Club2",
    name: "MC",
  },
];

export default function TopStats() {
  return (
    <View style={styles.container}>
      {mockStatItems.map((item) => (
        <View key={item.id} style={styles.statItem}>
          <Text style={styles.value}>{item.value}</Text>
          <Text style={styles.type}>{item.type}</Text>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: hp("1%"),
    backgroundColor: "#eaeaea",
  },
  statItem: {
    width: wp("20%"),
    height: wp("38%"),
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: wp("20%"),
    height: wp("20%"),
  },
  type: {
    fontSize: wp("3%"),
    fontWeight: "bold",
  },
  value: {
    fontSize: wp("5%"),
    fontWeight: "bold",
  },
  name: {
    fontSize: wp("3.5%"),
    fontWeight: "bold",
  },
});
