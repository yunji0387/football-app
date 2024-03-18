import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Header from "@/components/Header";
import ScoreTicker from "@/components/ScoreTicker";
import SeeMoreButton from "@/components/SeeMoreBtn";
import FeatureArticleCarousel from "@/components/FeatureArticleCarousel";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={styles.flexContainer}>
      <View style={styles.flexContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          <Header />
          <SeeMoreButton to="match" />
          <ScoreTicker />
          <FeatureArticleCarousel />
          <SeeMoreButton to="standings" />
          <View style={styles.homeContainer}>
            <Text style={styles.title}>Home</Text>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
            <EditScreenInfo path="app/(tabs)/index.tsx" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1, // Ensure that the parent View fills the screen
  },
  scrollView: {
    width: "100%", // Ensure that the ScrollView fills the width
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  homeContainer: {
    height: 500,
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