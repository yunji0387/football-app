import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

type HeaderTextProps = {
  isPlayerStats: boolean;
  title: string;
};

interface StatsTableRow {
    id: string;
    position: number;
    player?: string;
    playerImage?: string;
    team: string;
    teamImage: string;
    value: number;
}

const mockTableData: StatsTableRow[] = [
    {
        id: "1",
        position: 1,
        player: "Mohamed Salah",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player1",
        team: "Liverpool",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team1",
        value: 20,
    },
    {
        id: "2",
        position: 2,
        player: "Harry Kane",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player2",
        team: "Tottenham",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team2",
        value: 18,
    },
    {
        id: "3",
        position: 3,
        player: "Bruno Fernandes",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player3",
        team: "Manchester United",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team3",
        value: 17,
    },
    {
        id: "4",
        position: 4,
        player: "Kevin De Bruyne",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player4",
        team: "Man City",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team4",
        value: 15,
    },
    {
        id: "5",
        position: 5,
        player: "Son Heung-Min",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player5",
        team: "Tottenham",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team5",
        value: 14,
    },
    {
        id: "6",
        position: 6,
        player: "Jamie Vardy",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player6",
        team: "Leicester",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team6",
        value: 13,
    },
    {
        id: "7",
        position: 7,
        player: "Patrick Bamford",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player7",
        team: "Leeds",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team7",
        value: 12,
    },
    {
        id: "8",
        position: 8,
        player: "Dominic Calvert-Lewin",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player8",
        team: "Everton",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team8",
        value: 11,
    },
    {
        id: "9",
        position: 9,
        player: "Ilkay Gundogan",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player9",
        team: "Man City",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team9",
        value: 10,
    },
    {
        id: "10",
        position: 10,
        player: "Marcus Rashford",
        playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player10",
        team: "Manchester United",
        teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team10",
        value: 9,
    }
];

export default function StatsTable({ isPlayerStats, title }: HeaderTextProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.tableHeader}>
        <View style={styles.statsContainer}></View>
        <Text style={[styles.playerContainer, { fontWeight: "bold" }]}>Player</Text>
        <Text style={[styles.teamContainer, { fontWeight: "bold" }]}>Team</Text>
        <Text style={[styles.statsContainer, { fontWeight: "bold" }]}>Value</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    paddingHorizontal: wp("2%"),
    marginVertical: hp("2%"),
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: hp("0.75%"),
    backgroundColor: COLORS.darkGrey,
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
    justifyContent: "space-between",
    width: wp("32.5%"),
    textAlign: "center",
    color: COLORS.white,
    backgroundColor: "green",
    fontSize: wp("3.5%"),
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("32.5%"),
    textAlign: "center",
    color: COLORS.white,
    backgroundColor: "pink",
    fontSize: wp("3.5%"),
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
  },
  statsContainer: {
    width: wp("12.5%"),
    color: COLORS.white,
    textAlign: "center",
    fontSize: wp("3.5%"),
    backgroundColor: "blue",
  },
  fullResultText: {
    color: COLORS.blue,
    textDecorationLine: "underline",
    textAlign: "center",
    fontWeight: "bold",
  },
});
