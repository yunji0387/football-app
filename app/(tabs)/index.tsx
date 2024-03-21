import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import TopLogo from "@/components/TopLogo";
import ScoreTicker from "@/components/ScoreTicker";
import SeeMoreButton from "@/components/SeeMoreBtn";
import FeatureArticleCarousel from "@/components/FeatureArticleCarousel";
import NewsList from "@/components/NewsList";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.flexContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          <TopLogo />
          <SeeMoreButton to="match" />
          <ScoreTicker />
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