import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Header from "@/components/Header";
import ScoreTicker from "@/components/ScoreTicker";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <ScoreTicker />
        <View style={styles.homeContainer}>
          <Text style={styles.title}>Home</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
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