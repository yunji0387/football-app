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
  import { COLORS } from "@/constants/theme";

type MatchScore = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  time: string;
  date: string;
};

const sampleScores: MatchScore[] = [
  {
    id: "1",
    homeTeam: "CHE",
    awayTeam: "LIV",
    homeScore: 2,
    awayScore: 2,
    time: "6:00pm",
    date: "Sep 20",
  },
  {
    id: "2",
    homeTeam: "ARS",
    awayTeam: "TOT",
    homeScore: 2,
    awayScore: 4,
    time: "7:15pm",
    date: "Sep 20",
  },
  {
    id: "3",
    homeTeam: "MU",
    awayTeam: "MCI",
    homeScore: 2,
    awayScore: 0,
    time: "5:00pm",
    date: "Sep 22",
  },
  {
    id: "4",
    homeTeam: "BRE",
    awayTeam: "NEW",
    homeScore: 2,
    awayScore: 1,
    time: "3:20pm",
    date: "Sep 23",
  },
  {
    id: "5 ",
    homeTeam: "NOT",
    awayTeam: "SHE",
    homeScore: 0,
    awayScore: 0,
    time: "7:10pm",
    date: "Sep 23",
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
          <Text style={styles.team}>{match.homeTeam}</Text>
          <View style={styles.infoContainer}>
            <Text
              style={styles.score}
            >{`${match.homeScore} - ${match.awayScore}`}</Text>
            <Text style={styles.time}>{match.time}</Text>
          </View>
          <Text style={styles.team}>{match.awayTeam}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f0f0f0",
    height: hp("12%"),
  },
  matchContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: hp("1%"),
    padding: hp("1%"),
    flexDirection: "row",
    alignItems: "center",
    height: hp("10%"),
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  team: {
    fontSize: 16,
    fontWeight: "bold",
  },
  score: {
    fontSize: 20,
    // marginVertical: 5,
  },
  time: {
    fontSize: 14,
  },
});

export default ScoreTicker;
