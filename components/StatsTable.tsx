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
import HeaderText from "@/components/HeaderText";

type HeaderTextProps = {
  isPlayerStats: boolean;
  title: string;
};

interface StatsTableRow {
  id: string;
  position: number;
  playerName?: string;
  playerImage?: string;
  teamName: string;
  shortTeamName: string;
  teamImage: string;
  value: number;
}

const mockTableData: StatsTableRow[] = [
  {
    id: "1",
    position: 1,
    playerName: "Mohamed Salah",
    playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player1",
    teamName: "Liverpool",
    shortTeamName: "LIV",
    teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team1",
    value: 20,
  },
  {
    id: "2",
    position: 2,
    playerName: "Harry Kane",
    playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player2",
    teamName: "Tottenham",
    shortTeamName: "TOT",
    teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team2",
    value: 18,
  },
  {
    id: "3",
    position: 3,
    playerName: "Bruno Fernandes",
    playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player3",
    teamName: "Manchester United",
    shortTeamName: "MUN",
    teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team3",
    value: 17,
  },
  {
    id: "4",
    position: 4,
    playerName: "Kevin De Bruyne",
    playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player4",
    teamName: "Man City",
    shortTeamName: "MCI",
    teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team4",
    value: 15,
  },
  {
    id: "5",
    position: 5,
    playerName: "Son Heung-Min",
    playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player5",
    teamName: "Tottenham",
    shortTeamName: "TOT",
    teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team5",
    value: 14,
  },
//   {
//     id: "6",
//     position: 6,
//     playerName: "Jamie Vardy",
//     playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player6",
//     teamName: "Leicester",
//     shortTeamName: "LEI",
//     teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team6",
//     value: 13,
//   },
//   {
//     id: "7",
//     position: 7,
//     playerName: "Patrick Bamford",
//     playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player7",
//     teamName: "Leeds",
//     shortTeamName: "LEE",
//     teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team7",
//     value: 12,
//   },
//   {
//     id: "8",
//     position: 8,
//     playerName: "Dominic Calvert-Lewin",
//     playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player8",
//     teamName: "Everton",
//     shortTeamName: "EVE",
//     teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team8",
//     value: 11,
//   },
//   {
//     id: "9",
//     position: 9,
//     playerName: "Ilkay Gundogan",
//     playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player9",
//     teamName: "Man City",
//     shortTeamName: "MCI",
//     teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team9",
//     value: 10,
//   },
//   {
//     id: "10",
//     position: 10,
//     playerName: "Marcus Rashford",
//     playerImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Player10",
//     teamName: "Manchester United",
//     shortTeamName: "MUN",
//     teamImage: "https://via.placeholder.com/150/A8A8A8/303030?Text=Team10",
//     value: 9,
//   },
];

export default function StatsTable({ isPlayerStats, title }: HeaderTextProps) {
  const onRowPress = (id: string) => {
    console.log("Row pressed: ", id);
  };

  const teamContainerWidth = isPlayerStats ? wp("17.5%") : wp("67.5%");
  const teamNameWidth = isPlayerStats ? wp("10%") : wp("59%");

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <HeaderText title={title} />
      <View style={styles.tableHeader}>
        <View style={[styles.statsContainer, { width: wp("7.5%") }]}></View>
        {isPlayerStats && (
          <Text style={[styles.playerContainer, { fontWeight: "bold" }]}>
            Player
          </Text>
        )}
        <Text
          style={[
            styles.teamContainer,
            { width: teamContainerWidth, fontWeight: "bold" },
          ]}
        >
          Team
        </Text>
        <Text style={[styles.statsContainer, { fontWeight: "bold" }]}>
          Value
        </Text>
      </View>

      {mockTableData.map((row) => (
        <TouchableOpacity
          key={row.id}
          style={styles.row}
          onPress={() => onRowPress(row.id)}
        >
          <Text style={[styles.statsContainer, { width: wp("7.5%") }]}>
            {row.position}
          </Text>
          {isPlayerStats && (
            <View style={styles.playerContainer}>
              <Image
                source={{ uri: row.playerImage }}
                style={styles.teamImage}
              />
              <Text style={styles.playerName}>{row.playerName}</Text>
            </View>
          )}
          <View style={[styles.teamContainer, { width: teamContainerWidth }]}>
            <Image source={{ uri: row.teamImage }} style={styles.teamImage} />
            <Text style={[styles.teamName, { width: teamNameWidth }]}>
              {isPlayerStats ? row.shortTeamName : row.teamName}
            </Text>
          </View>
          <Text style={styles.statsContainer}>{row.value}</Text>
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
    paddingHorizontal: wp("2%"),
    marginVertical: hp("1%"),
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: hp("0.75%"),
    paddingHorizontal: wp("2%"),
    backgroundColor: COLORS.darkGrey,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp("0.5%"),
    paddingHorizontal: wp("2%"),
    borderBottomWidth: hp("0.1%"),
    borderBottomColor: "#ccc",
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    color: COLORS.white,
    fontSize: wp("3.5%"),
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("50%"),
    textAlign: "center",
    color: COLORS.white,
    fontSize: wp("3.5%"),
  },
  teamImage: {
    width: wp("6%"),
    height: wp("6%"),
  },
  playerName: {
    width: wp("42%"),
    textAlign: "left",
    fontSize: wp("3.5%"),
    color: COLORS.white,
    fontWeight: "bold",
  },
  teamName: {
    textAlign: "left",
    fontSize: wp("3.5%"),
    color: COLORS.white,
    fontWeight: "bold",
  },
  statsContainer: {
    width: wp("12.5%"),
    color: COLORS.white,
    textAlign: "center",
    fontSize: wp("3.5%"),
  },
  fullResultText: {
    width: "100%",
    color: COLORS.blue,
    textDecorationLine: "underline",
    textAlign: "center",
    fontWeight: "bold",
  },
});
