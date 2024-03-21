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
    played: 28,
    win: 22,
    draw: 4,
    loss: 2,
    points: 70,
  },
  {
    id: "2",
    position: 2,
    team: "Manchester City",
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
    played: 28,
    win: 18,
    draw: 4,
    loss: 6,
    points: 58,
  },
  {
    id: "5",
    position: 5,
    team: "Tottenham Hotspur",
    played: 28,
    win: 16,
    draw: 6,
    loss: 6,
    points: 54,
  },
  {
    id: "6",
    position: 6,
    team: "Manchester United",
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
    played: 28,
    win: 12,
    draw: 9,
    loss: 7,
    points: 45,
  },
  {
    id: "8",
    position: 8,
    team: "Leicester City",
    played: 28,
    win: 11,
    draw: 9,
    loss: 8,
    points: 42,
  },
  {
    id: "9",
    position: 9,
    team: "West Ham United",
    played: 28,
    win: 10,
    draw: 8,
    loss: 10,
    points: 38,
  },
  {
    id: "10",
    position: 10,
    team: "Wolverhampton Wanderers",
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
    played: 28,
    win: 9,
    draw: 7,
    loss: 12,
    points: 34,
  },
  {
    id: "12",
    position: 12,
    team: "Newcastle United",
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
    played: 28,
    win: 9,
    draw: 4,
    loss: 15,
    points: 31,
  },
  {
    id: "15",
    position: 15,
    team: "Brighton & Hove Albion",
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
        <Text style={styles.headerItem}>Team</Text>
        <Text style={styles.headerItem}>P</Text>
        <Text style={styles.headerItem}>W</Text>
        <Text style={styles.headerItem}>D</Text>
        <Text style={styles.headerItem}>L</Text>
        <Text style={styles.headerItem}>Pts</Text>
      </View>
      {mockTableData.map((row) => (
        <TouchableOpacity
          key={row.id}
          style={styles.row}
          onPress={() => onRowPress(row.id)}
        >
          <Text style={styles.rowItem}>{row.team}</Text>
          <Text style={styles.rowItem}>{row.played}</Text>
          <Text style={styles.rowItem}>{row.win}</Text>
          <Text style={styles.rowItem}>{row.draw}</Text>
          <Text style={styles.rowItem}>{row.loss}</Text>
          <Text style={styles.rowItem}>{row.points}</Text>
        </TouchableOpacity>
      ))}
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
    padding: 10,
    backgroundColor: "#ddd", // Color for the header
  },
  headerItem: {
    fontWeight: "bold",
    // Additional header styles here
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", // Color for the row separator
  },
  rowItem: {
    color: COLORS.white
    // Styles for each cell in the row
  },
  // Add additional styles as needed
});
