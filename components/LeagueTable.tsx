import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

interface LeagueTableRow {
  id: string;
  position: number;
  team: string;
  imageUrl: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  points: number;
}

const mockTableData: LeagueTableRow[] = [
  {
    id: "1",
    position: 1,
    team: "Liverpool",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team1",
    played: 28,
    win: 22,
    draw: 4,
    loss: 2,
    points: 70,
  },
  {
    id: "2",
    position: 2,
    team: "Man City",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team2",
    played: 28,
    win: 21,
    draw: 3,
    loss: 4,
    points: 66,
  },
  {
    id: "3",
    position: 3,
    team: "Chelsea",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team3",
    played: 28,
    win: 19,
    draw: 5,
    loss: 4,
    points: 62,
  },
  {
    id: "4",
    position: 4,
    team: "Arsenal",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team4",
    played: 28,
    win: 18,
    draw: 4,
    loss: 6,
    points: 58,
  },
  {
    id: "5",
    position: 5,
    team: "Tottenham",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team5",
    played: 28,
    win: 16,
    draw: 6,
    loss: 6,
    points: 54,
  },
  {
    id: "6",
    position: 6,
    team: "Man United",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team6",
    played: 28,
    win: 14,
    draw: 8,
    loss: 6,
    points: 50,
  },
  {
    id: "7",
    position: 7,
    team: "Everton",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team7",
    played: 28,
    win: 12,
    draw: 9,
    loss: 7,
    points: 45,
  },
  {
    id: "8",
    position: 8,
    team: "Leicester",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team8",
    played: 28,
    win: 11,
    draw: 9,
    loss: 8,
    points: 42,
  },
  {
    id: "9",
    position: 9,
    team: "West Ham",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team9",
    played: 28,
    win: 10,
    draw: 8,
    loss: 10,
    points: 38,
  },
  {
    id: "10",
    position: 10,
    team: "Wolves",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team10",
    played: 28,
    win: 9,
    draw: 10,
    loss: 9,
    points: 37,
  },
  {
    id: "11",
    position: 11,
    team: "Southampton",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team11",
    played: 28,
    win: 9,
    draw: 7,
    loss: 12,
    points: 34,
  },
  {
    id: "12",
    position: 12,
    team: "Newcastle",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team12",
    played: 28,
    win: 8,
    draw: 9,
    loss: 11,
    points: 33,
  },
  {
    id: "13",
    position: 13,
    team: "Crystal Palace",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team13",
    played: 28,
    win: 8,
    draw: 8,
    loss: 12,
    points: 32,
  },
  {
    id: "14",
    position: 14,
    team: "Aston Villa",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team14",
    played: 28,
    win: 9,
    draw: 4,
    loss: 15,
    points: 31,
  },
  {
    id: "15",
    position: 15,
    team: "Brighton",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team15",
    played: 28,
    win: 7,
    draw: 10,
    loss: 11,
    points: 31,
  },
  {
    id: "16",
    position: 16,
    team: "Burnley",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team16",
    played: 28,
    win: 8,
    draw: 6,
    loss: 14,
    points: 30,
  },
  {
    id: "17",
    position: 17,
    team: "Brentford",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team17",
    played: 28,
    win: 7,
    draw: 7,
    loss: 14,
    points: 28,
  },
  {
    id: "18",
    position: 18,
    team: "Leeds United",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team18",
    played: 28,
    win: 6,
    draw: 9,
    loss: 13,
    points: 27,
  },
  {
    id: "19",
    position: 19,
    team: "Watford",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team19",
    played: 28,
    win: 5,
    draw: 8,
    loss: 15,
    points: 23,
  },
  {
    id: "20",
    position: 20,
    team: "Norwich City",
    imageUrl: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team20",
    played: 28,
    win: 3,
    draw: 5,
    loss: 20,
    points: 14,
  },
];

export default function LeagueTable() {
  const onRowPress = (teamId: string) => {
    console.log(`Navigate to team ${teamId}`);
    // Here you would typically navigate to the team's detailed stats page
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.teamContainer}>Team</Text>
        <Text style={styles.statsContainer}>P</Text>
        <Text style={styles.statsContainer}>W</Text>
        <Text style={styles.statsContainer}>D</Text>
        <Text style={styles.statsContainer}>L</Text>
        <Text style={styles.statsContainer}>Pts</Text>
      </View>
      {mockTableData.map((row) => (
        <TouchableOpacity
          key={row.id}
          style={styles.row}
          onPress={() => onRowPress(row.id)}
        >
          <View style={styles.teamContainer}>
            <Image source={{ uri: row.imageUrl }} style={styles.teamImage}/>
            <Text style={styles.teamName}>{row.team}</Text>
          </View>
          <Text style={styles.statsContainer}>{row.played}</Text>
          <Text style={styles.statsContainer}>{row.win}</Text>
          <Text style={styles.statsContainer}>{row.draw}</Text>
          <Text style={styles.statsContainer}>{row.loss}</Text>
          <Text style={styles.statsContainer}>{row.points}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.tableHeader}>
        <Text style={styles.fullResultText}>Show Full Result</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: hp("0.75%"),
    backgroundColor: "#202020",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: hp("0.5%"),
    borderBottomWidth: hp("0.1%"),
    borderBottomColor: "#ccc",
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: wp("32%"),
    textAlign: "center",
    color: COLORS.white,
    fontSize: wp("3.5%"),
    backgroundColor: "green",
  },
  teamImage: {
    width: wp("6%"),
    height: wp("6%"),
  },
  teamName: {
    width: wp("25%"),
    textAlign: "center",
    fontSize: wp("3.5%"),
    color: COLORS.white,
    fontWeight: "bold",
    backgroundColor: "red",
  },
  statsContainer: {
    width: wp("7.5%"),
    color: COLORS.white,
    // backgroundColor: "blue",
    textAlign: "center",
    fontSize: wp("3.5%"),
  },
  fullResultText: {
    color: COLORS.blue,
    textDecorationLine: "underline",
    textAlign: "center",
    fontWeight: "bold",
  },
});
