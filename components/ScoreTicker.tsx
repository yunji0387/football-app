import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { COLORS } from "@/constants/theme";

type MatchScore = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeLogoUri: string;
  awayLogoUri: string;
  homeScore: number;
  awayScore: number;
  time: string;
  date: string;
  matchNumber: number;
};

const sampleScores: MatchScore[] = [
  {
    id: "1",
    homeTeam: "CHE",
    awayTeam: "LIV",
    homeLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    awayLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    homeScore: 2,
    awayScore: 2,
    time: "6:00pm",
    date: "Sep 20",
    matchNumber: 26,
  },
  {
    id: "2",
    homeTeam: "ARS",
    awayTeam: "TOT",
    homeLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    awayLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    homeScore: 2,
    awayScore: 4,
    time: "7:15pm",
    date: "Sep 20",
    matchNumber: 26,
  },
  {
    id: "3",
    homeTeam: "MU",
    awayTeam: "MCI",
    homeLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    awayLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    homeScore: 2,
    awayScore: 0,
    time: "5:00pm",
    date: "Sep 22",
    matchNumber: 27,
  },
  {
    id: "4",
    homeTeam: "BRE",
    awayTeam: "NEW",
    homeLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    awayLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    homeScore: 2,
    awayScore: 1,
    time: "3:20pm",
    date: "Sep 23",
    matchNumber: 27,
  },
  {
    id: "5 ",
    homeTeam: "NOT",
    awayTeam: "SHE",
    homeLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    awayLogoUri: "https://via.placeholder.com/50x50.png?text=HT",
    homeScore: 0,
    awayScore: 0,
    time: "7:10pm",
    date: "Sep 23",
    matchNumber: 28,
  },
];

const ScoreTicker = () => {
  // State to hold match scores
  const [scores, setScores] = useState<MatchScore[]>(sampleScores);

  // Fetch live scores - this should be replaced with actual data fetching logic
  useEffect(() => {
    // TODO: Implement live score fetching
    const interval = setInterval(() => {
      // Here you would fetch the live scores and update state
      // setScores(fetchedScores);
    }, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Navigate to match detail - replace with your navigation logic
  const navigateToMatchDetail = (matchId: string) => {
    console.log("Navigate to match with id:", matchId);
    // Navigation logic goes here
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {scores.map((match) => (
        <TouchableOpacity
          key={match.id}
          style={styles.matchContainer}
          onPress={() => navigateToMatchDetail(match.id)}
        >
          <Text style={styles.dateTime}>
            {match.date}, {match.time}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={styles.teamIconContainer}>
              <Image
                source={{ uri: match.homeLogoUri }}
                contentFit="contain"
                style={styles.teamIcon}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text
                style={styles.score}
              >{`${match.homeScore} - ${match.awayScore}`}</Text>
            </View>
            <View style={styles.teamIconContainer}>
              <Image
                source={{ uri: match.awayLogoUri }}
                contentFit="contain"
                style={styles.teamIcon}
              />
            </View>
          </View>
          <Text style={styles.dateTime}>EPL R{match.matchNumber}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: hp("12.5%"),
  },
  matchContainer: {
    backgroundColor: COLORS.primary,
    margin: hp("1%"),
    padding: hp("1%"),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: hp("10.5%"),
    borderLeftWidth: hp("0.1%"),
    borderTopWidth: hp("0.1%"),
    borderRightWidth: hp("0.25%"),
    borderBottomWidth: hp("0.25%"),
    borderBottomColor: COLORS.secondary,
    borderRightColor: COLORS.secondary,
    borderTopColor: COLORS.white,
    borderLeftColor: COLORS.white,
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
  },
  team: {
    fontSize: hp("2%"),
    fontWeight: "bold",
  },
  score: {
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: COLORS.white,
  },
  dateTime: {
    fontSize: hp("1.5%"),
    color: COLORS.white,
  },
  teamIconContainer: {
    paddingVertical: hp("0.2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  teamIcon: {
    width: hp("5%"),
    height: hp("5%"),
  },
});

export default ScoreTicker;
