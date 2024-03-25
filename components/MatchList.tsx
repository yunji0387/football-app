import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "@/constants/theme";

interface MatchDetail {
  id: string;
  homeTeam: {
    logoUri: string;
    name: string;
  };
  awayTeam: {
    logoUri: string;
    name: string;
  };
  score: {
    home: number;
    away: number;
  };
  date: string;
  time: string;
  matchNumber: number;
}

const mockMatchDetails: MatchDetail[] = [
  {
    id: "m1",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "Liverpool",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Man City",
    },
    score: {
      home: 2,
      away: 1,
    },
    date: "2024-03-23",
    time: "15:00",
    matchNumber: 26,
  },
  {
    id: "m2",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "Chelsea",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Arsenal",
    },
    score: {
      home: 0,
      away: 0,
    },
    date: "2024-03-24",
    time: "17:30",
    matchNumber: 26,
  },
  {
    id: "m3",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "Tottenham",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Man United",
    },
    score: {
      home: 3,
      away: 2,
    },
    date: "2024-03-25",
    time: "20:00",
    matchNumber: 27,
  },
  {
    id: "m4",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "Leicester City",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Everton",
    },
    score: {
      home: 1,
      away: 2,
    },
    date: "2024-03-26",
    time: "18:00",
    matchNumber: 27,
  },
  {
    id: "m5",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "Wolves",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Southampton",
    },
    score: {
      home: 2,
      away: 2,
    },
    date: "2024-03-27",
    time: "15:00",
    matchNumber: 27,
  },
  {
    id: "m6",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "Aston Villa",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Newcastle",
    },
    score: {
      home: 0,
      away: 1,
    },
    date: "2024-03-28",
    time: "15:00",
    matchNumber: 27,
  },
  {
    id: "m7",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "West Ham",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Fulham",
    },
    score: {
      home: 1,
      away: 0,
    },
    date: "2024-03-29",
    time: "20:00",
    matchNumber: 27,
  },
  {
    id: "m8",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "Norwich City",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Brentford",
    },
    score: {
      home: 1,
      away: 3,
    },
    date: "2024-03-30",
    time: "17:30",
    matchNumber: 28,
  },
  {
    id: "m9",
    homeTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=HT",
      name: "Brighton",
    },
    awayTeam: {
      logoUri: "https://via.placeholder.com/50x50.png?text=AT",
      name: "Watford",
    },
    score: {
      home: 2,
      away: 0,
    },
    date: "2024-03-31",
    time: "15:00",
    matchNumber: 28,
  },
];

export default function MatchList() {
  const onCardPress = (matchId: string) => {
    console.log(`Navigate to match with ID: ${matchId}`);
    // Implement navigation to the match's detailed view
  };

  return (
    <View style={styles.container}>
      {mockMatchDetails.map((match) => (
        <TouchableOpacity
          key={match.id}
          style={styles.card}
          onPress={() => onCardPress(match.id)}
        >
          <View style={styles.teamContainerLeft}>
            <Image
              source={{ uri: match.homeTeam.logoUri }}
              style={styles.logo}
            />
            <Text style={styles.teamName}>{match.homeTeam.name}</Text>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.date}>{match.date} {match.time}</Text>
            <Text style={styles.score}>
              {match.score.home} - {match.score.away}
            </Text>

            <Text style={styles.matchNumber}>EPL R{match.matchNumber}</Text>
          </View>
          <View style={styles.teamContainerRight}>
            <Image
              source={{ uri: match.awayTeam.logoUri }}
              style={styles.logo}
            />
            <Text style={styles.teamName}>{match.awayTeam.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    paddingHorizontal: wp("2%"),
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.darkGrey,
    marginVertical: hp("1%"),
    height: hp("9.5%"),
    padding: hp("1.5%"),
  },
  teamContainerLeft: {
    width: "25%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  teamContainerRight: {
    width: "25%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: "pink",
  },
  logo: {
    width: hp("5%"),
    height: hp("5%"),
  },
  teamName: {
    fontSize: hp("1.5%"),
    color: COLORS.white,
    // backgroundColor: "green",
  },
  scoreContainer: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "green",
  },
  score: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    color: COLORS.white,
  },
  date: {
    fontSize: hp("1.5%"),
    color: COLORS.white,
  },
  matchNumber: {
    fontSize: hp("1.5%"),
    color: COLORS.white,
  },
});
