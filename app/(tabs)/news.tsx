import { ScrollView, StyleSheet } from "react-native";
// import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import TopLogo from "@/components/TopLogo";
import SeeMoreButton from "@/components/SeeMoreBtn";
import FeatureArticleCarousel from "@/components/FeatureArticleCarousel";
import NewsList from "@/components/NewsList";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function news() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.flexContainer}>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
            >
              <TopLogo />
              <FeatureArticleCarousel />
              <SeeMoreButton to="standings" />
              <NewsList />
              {/* <View style={styles.homeContainer}>
                <Text style={styles.title}>Home</Text>
                <View
                  style={styles.separator}
                  lightColor="#eee"
                  darkColor="rgba(255,255,255,0.1)"
                />
                <EditScreenInfo path="app/(tabs)/index.tsx" />
              </View> */}
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      flexContainer: {
        flex: 1,
      },
      scrollView: {
        flex: 1,
      },
      contentContainer: {
        paddingBottom: hp("9%"),
        alignItems: "center",
        justifyContent: "center",
      },
      homeContainer: {
        height: 500,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
        borderWidth: hp("2%"),
        borderColor: "yellow",
        marginTop: hp("5%"),
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
      },
    });

// import React, { useEffect, useState } from "react";
// import { StyleSheet, ScrollView, View, Text } from "react-native";
// import NotFoundScreen from "../+not-found";

// interface StandingItem {
//   position: number;
//   team: {
//     name: string;
//     shortName: string;
//     tla: string;
//     crest: string;
//   };
//   playedGames: number;
//   won: number;
//   draw: number;
//   lost: number;
//   points: number;
//   goalsFor: number;
//   goalsAgainst: number;
//   goalDifference: number;
// }

// export default function Standings() {
//   const [standings, setStandings] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           // "https://football-standings-backend-9c023af5d229.herokuapp.com/standings/PL"
//           "https://not-exist-testing.com"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setStandings(data.data.standings[0].table);
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Standings</Text>
//       {standings.length === 0 ? (
//         <NotFoundScreen />
//       ) : (
//         <View style={styles.table}>
//         {standings.map((item: StandingItem, index: number) => (
//           <View key={index} style={styles.row}>
//             <Text style={styles.cell}>{item.position}</Text>
//             <Text style={styles.cell}>{item.team.tla}</Text>
//             <Text style={styles.cell}>{item.won}</Text>
//             <Text style={styles.cell}>{item.draw}</Text>
//             <Text style={styles.cell}>{item.lost}</Text>
//             <Text style={styles.cell}>{item.points}</Text>
//           </View>
//         ))}
//       </View>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   table: {
//     width: "100%",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//     paddingVertical: 5,
//   },
//   cell: {
//     fontSize: 16,
//   },
// });