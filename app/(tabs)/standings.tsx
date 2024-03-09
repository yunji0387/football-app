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

import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function Standings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Standings</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/standings.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
